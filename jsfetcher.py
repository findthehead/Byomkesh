import sys
import requests
from bs4 import BeautifulSoup
import os
from jsbeautifier import beautify_file
import zipfile
import threading
import itertools
import time

# ANSI color escape sequences
COLOR_RED = "\033[91m"
COLOR_GREEN = "\033[92m"
COLOR_YELLOW = "\033[93m"
COLOR_BLUE = "\033[94m"
COLOR_RESET = "\033[0m"

# ASCII art banner with color
ascii_art = f"""
{COLOR_YELLOW}
       ░▒▓█▓▒░░▒▓███████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓████████▓▒░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░  
       ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
       ░▒▓█▓▒░░▒▓██████▓▒░░▒▓██████▓▒░ ░▒▓██████▓▒░    ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓███████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░         ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░ 
 ░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░      ░▒▓████████▓▒░  ░▒▓█▓▒░   ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░  
                                 
{COLOR_RESET}
"""

class Check:
    def __init__(self, url):
        self.url = url
        self.stop_event = threading.Event()

    def spinner_animation(self):
        spinner = itertools.cycle(['-', '/', '|', '\\'])
        sys.stdout.write(f"{COLOR_GREEN}Scripts are getting downloaded for you ")
        while not self.stop_event.is_set():
            sys.stdout.write(next(spinner))
            sys.stdout.flush()
            time.sleep(0.1)
            sys.stdout.write('\b')
        sys.stdout.write(f"{COLOR_RESET}\n")

    def find(self):
        try:
            r = requests.get(self.url)
            r.raise_for_status()  # Raise HTTPError for bad responses
        except requests.exceptions.RequestException as e:
            print(f"{COLOR_RED}Error fetching URL: {e}{COLOR_RESET}")
            return None

        soup = BeautifulSoup(r.content, 'html.parser')
        scripts = soup.find_all('script', src=True)
        js_urls = []
        for script in scripts:
            js_url = script['src']
            if js_url.endswith('.js'):
                js_urls.append(js_url)
        return js_urls

    def download_and_beautify(self):
        js_urls = self.find()
        if not js_urls:
            return "No JavaScript files found."

        zip_filename = f"{self.url.rstrip('/').replace('http://', '').replace('https://', '').replace('.', '_')}.zip"

        # Start spinner animation in a separate thread
        spinner_thread = threading.Thread(target=self.spinner_animation)
        spinner_thread.start()

        with zipfile.ZipFile(zip_filename, 'w') as zipf:
            for js_url in js_urls:
                full_url = self.url.rstrip('/') + '/' + js_url.lstrip('/')
                filename = os.path.basename(js_url)
                try:
                    r = requests.get(full_url)
                    r.raise_for_status()
                    # Save original JS file
                    with open(filename, 'wb') as f:
                        f.write(r.content)

                    # Beautify JS file
                    beautified_content = beautify_file(filename)
                    beautified_filename = f"beautified_{filename}"
                    with open(beautified_filename, 'w') as f:
                        f.write(beautified_content)

                    # Add beautified file to zip
                    zipf.write(beautified_filename)

                    # Clean up temporary files
                    os.remove(filename)
                    os.remove(beautified_filename)

                except requests.exceptions.RequestException as e:
                    print(f"{COLOR_RED}Error downloading {full_url}: {e}{COLOR_RESET}")
                    continue
                except Exception as e:
                    print(f"{COLOR_RED}Error processing {filename}: {e}{COLOR_RESET}")
                    continue

        # Stop spinner animation thread
        self.stop_event.set()
        spinner_thread.join()

        return f"{COLOR_GREEN}Download, beautify, and zip complete. Zip file saved as {zip_filename}{COLOR_RESET}"

if __name__ == "__main__":
    # Print colored ASCII art banner
    print(ascii_art)

    if len(sys.argv) < 2:
        print(f"{COLOR_RED}Usage: python script.py <url>{COLOR_RESET}")
        sys.exit(1)

    url = sys.argv[1]
    app = Check(url)
    print(app.download_and_beautify())
