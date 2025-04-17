import sys
import requests
from bs4 import BeautifulSoup
import os
import shutil
from jsbeautifier import beautify_file
import zipfile
import threading
import itertools
import time
from urllib.parse import urljoin, urlparse

COLOR_RED = "\033[91m"
COLOR_GREEN = "\033[92m"
COLOR_YELLOW = "\033[93m"
COLOR_BLUE = "\033[94m"
COLOR_RESET = "\033[0m"

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
        self.extensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.es6', '.es', '.jse', '.vue']
        self.domain_dir = self.extract_domain()

    def extract_domain(self):
        parsed = urlparse(self.url)
        domain = parsed.netloc
        if domain.startswith("www."):
            domain = domain[4:]
        domain = domain.split(':')[0]
        return domain

    def spinner_animation(self):
        spinner = itertools.cycle(['-', '/', '|', '\\'])
        while not self.stop_event.is_set():
            sys.stdout.write(next(spinner))
            sys.stdout.flush()
            time.sleep(0.1)
            sys.stdout.write('\b')
        sys.stdout.write(f"{COLOR_RESET}\n")

    def find(self):
        try:
            r = requests.get(self.url)
            r.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"{COLOR_RED}Error fetching URL: {e}{COLOR_RESET}")
            return None

        soup = BeautifulSoup(r.content, 'html.parser')
        scripts = soup.find_all('script', src=True)
        js_urls = []
        for script in scripts:
            js_url = script['src']
            if js_url.endswith(tuple(self.extensions)):
                js_urls.append(js_url)
        return js_urls

    def download_and_beautify(self):
        js_urls = self.find()
        if not js_urls:
            return "No JavaScript files found."
        os.makedirs(self.domain_dir, exist_ok=True)
        for js_url in js_urls:
            full_url = urljoin(self.url, js_url)
            filename = os.path.basename(js_url)
            try:
                print(f"{COLOR_BLUE}Downloading: {full_url}{COLOR_RESET}")
                spinner_thread = threading.Thread(target=self.spinner_animation)
                spinner_thread.start()
                r = requests.get(full_url)
                r.raise_for_status()
                with open(filename, 'wb') as f:
                    f.write(r.content)
                beautified_content = beautify_file(filename)
                beautified_filename = f"beautified_{filename}"
                with open(beautified_filename, 'w') as f:
                    f.write(beautified_content)
                shutil.move(beautified_filename, os.path.join(self.domain_dir, beautified_filename))
                os.remove(filename)
            except requests.exceptions.RequestException as e:
                self.stop_event.set()
                print(f"{COLOR_RED}Error downloading {full_url}: {e}{COLOR_RESET}")
                continue
            except Exception as e:
                self.stop_event.set()
                print(f"{COLOR_RED}Error processing {filename}: {e}{COLOR_RESET}")
                continue
        self.stop_event.set()
        spinner_thread.join()
        return f"{COLOR_GREEN}Downloaded, Beautified, and Saved to directory: {self.domain_dir}{COLOR_RESET}"

if __name__ == "__main__":
    print(ascii_art)
    if len(sys.argv) < 2:
        print(f"{COLOR_RED}Usage: python script.py <url>{COLOR_RESET}")
        sys.exit(1)
    url = sys.argv[1]
    app = Check(url)
    app.download_and_beautify()
