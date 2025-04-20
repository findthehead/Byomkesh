import os
import requests
from bs4 import BeautifulSoup
import threading
import itertools
import time
import sys
import argparse
from jsbeautifier import beautify_file, beautify
from urllib.parse import urljoin, urlparse

# Terminal colors
COLOR_RED = "\033[91m"
COLOR_GREEN = "\033[92m"
COLOR_YELLOW = "\033[93m"
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

def parse_cookie(cookie):
    if ':' in cookie:
        key, value = cookie.split(':', 1)
        return {key.strip(): value.strip()}
    else:
        return {"Cookie": cookie.strip()}

class Check:
    def __init__(self, url, cookies=None, proxies=None, cert=None):
        self.url = url
        self.cookies = cookies or {}
        self.proxies = proxies
        self.cert = cert
        self.headers = {"User-Agent": "Mozilla/5.0"}
        self.stop_event = threading.Event()
        self.extensions = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.es6', '.es', '.jse', '.vue']
        self.domain_dir = self.extract_domain()

    def extract_domain(self):
        parsed = urlparse(self.url)
        domain = parsed.netloc
        if domain.startswith("www."):
            domain = domain[4:]
        return domain.split(':')[0]

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
            r = requests.get(self.url, headers=self.headers, cookies=self.cookies, proxies=self.proxies, verify=self.cert)
            r.raise_for_status()
            soup = BeautifulSoup(r.text, 'html.parser')
            scripts = soup.find_all('script', src=True)

            js_urls = []
            for script in scripts:
                src = script['src']
                path = urlparse(src).path  # Extract path without query
                if path.endswith(tuple(self.extensions)):
                    js_urls.append(src)

            return js_urls
        except Exception as e:
            print(f"{COLOR_RED}Failed to find external scripts: {e}{COLOR_RESET}")
            return []

    def download_inline_js(self):
        try:
            r = requests.get(self.url, headers=self.headers, cookies=self.cookies, proxies=self.proxies, verify=self.cert)
            r.raise_for_status()
            soup = BeautifulSoup(r.text, 'html.parser')
            scripts = soup.find_all('script', src=False)

            if not scripts:
                return

            print(f"{COLOR_GREEN}[+] Found {len(scripts)} inline script(s). Processing...{COLOR_RESET}")
            os.makedirs(self.domain_dir, exist_ok=True)

            for idx, script in enumerate(scripts):
                js_code = script.string or ''
                beautified_code = beautify(js_code)
                filename = os.path.join(self.domain_dir, f'inline_script_{idx+1}.js')
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(beautified_code)
                print(f"{COLOR_GREEN}[+] Saved inline script: {filename}{COLOR_RESET}")
        except Exception as e:
            print(f"{COLOR_RED}Error processing inline JavaScript: {e}{COLOR_RESET}")

    def download_and_beautify(self):
        js_urls = self.find()
        if js_urls:
            os.makedirs(self.domain_dir, exist_ok=True)
            for js_url in js_urls:
                full_url = urljoin(self.url, js_url)
                filename = os.path.basename(js_url)
                spinner_thread = threading.Thread(target=self.spinner_animation)
                spinner_thread.start()
                try:
                    r = requests.get(full_url, headers=self.headers, cookies=self.cookies, proxies=self.proxies, verify=self.cert)
                    r.raise_for_status()
                    temp_path = os.path.join(self.domain_dir, filename)
                    with open(temp_path, 'wb') as f:
                        f.write(r.content)
                    beautified_content = beautify_file(temp_path)
                    with open(temp_path, 'w', encoding='utf-8') as f:
                        f.write(beautified_content)
                    print(f"{COLOR_GREEN}[+] Downloaded and beautified: {filename}{COLOR_RESET}")
                except Exception as e:
                    print(f"{COLOR_RED}Error processing {filename}: {e}{COLOR_RESET}")
                finally:
                    self.stop_event.set()
                    spinner_thread.join()

        self.download_inline_js()
        return f"{COLOR_GREEN}✔ Downloaded, Beautified (External & Inline), and Saved to directory: {self.domain_dir}{COLOR_RESET}"

# Main script execution
if __name__ == "__main__":
    print(ascii_art)
    parser = argparse.ArgumentParser(description="Download and beautify JavaScript files from a URL.")
    parser.add_argument("url", help="The URL to fetch JS files from.")
    parser.add_argument("-c", "--cookies", help="Cookie string (e.g., 'name=value')", default="")
    parser.add_argument("-p", "--proxy", help="Use Burp Suite proxy (e.g., 'http://127.0.0.1:8080')", default=None)
    parser.add_argument("-b", "--burp-cert", help="Path to Burp Suite CA certificate (for SSL verification). Please change .der format to .pem format with openssl x509 -inform der -in burp-cert.der -out burp-cert.pem", default=None)

    args = parser.parse_args()

    # Parse cookies if provided
    cookies = parse_cookie(args.cookies) if args.cookies else {}

    # Set up proxy if provided
    proxies = {"http": args.proxy, "https": args.proxy} if args.proxy else None

    # Set up certificate for Burp Suite if provided
    cert = args.burp_cert if args.burp_cert else None

    app = Check(args.url, cookies=cookies, proxies=proxies, cert=cert)
    result = app.download_and_beautify()

    if "Downloaded" in result:
        print(result)
