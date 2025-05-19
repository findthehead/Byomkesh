import os
import re
import requests
from bs4 import BeautifulSoup
import threading
import itertools
import tqdm
import time
import sys
import argparse
from jsbeautifier import beautify_file, beautify
from urllib.parse import urljoin, urlparse
from rich.console import Console
console = Console()
# Terminal colors
COLOR_RED = "\033[91m"
COLOR_GREEN = "\033[92m"
COLOR_YELLOW = "\033[93m"
COLOR_RESET = "\033[0m"

ascii_art = f"""
{COLOR_YELLOW}
      .::::::::::.                         .::::::::::.
    .::::''''''::::.                      .::::''''''::::.
  .:::'          `::::....          ....::::'          `:::.
 .::'             `:::::::|        |:::::::'             `::.
.::|               |::::::|        |::::::|               |::.
`--'               |::::::|BYOMKESH|::::::|               `--'
 :::               |::-o::|        |::o-::|               :::
 `::.             .|::::::|        |::::::|.             .::'
  `:::.          .::\-----'        `-----/::.          .:::'
    `::::......::::'                      `::::......::::'
      `::::::::::'                          `::::::::::'
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
        self.extensions = ['.html','.ejs','.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs', '.es6', '.es', '.jse', '.vue']
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
                if os.path.exists(filename):
                    print(f"{COLOR_YELLOW}[!] {filename} already exists. Skipping.{COLOR_RESET}")
                    continue
                
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(beautified_code)
                print(f"{COLOR_GREEN}[+] Saved inline script: {filename}{COLOR_RESET}")
        except Exception as e:
            print(f"{COLOR_RED}Error processing inline JavaScript: {e}{COLOR_RESET}")
            
            
    def download_and_beautify(self):
        if os.path.exists(self.domain_dir):
            print(f"{COLOR_YELLOW}[!] Directory {self.domain_dir} already exists. Skipping download.{COLOR_RESET}")
            return f"{COLOR_GREEN}✔ Skipping download. Directory already exists.{COLOR_RESET}"
        
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
        self.download_inline_js()  # Downloads inline JS
        return f"{COLOR_GREEN}✔ Downloaded, Beautified (External & Inline), and Saved to directory: {self.domain_dir}{COLOR_RESET}"

    

    def scan(self):
        regex_list = {
            'Google API': r'AIza[0-9A-Za-z-_]{35}',
            "Artifactory API Token": r'(?:\s|=|:|"|^)AKC[a-zA-Z0-9]{10,}',
            "Artifactory Password": r'(?:\s|=|:|"|^)AP[\dABCDEF][a-zA-Z0-9]{8,}',
            "Cloudinary Basic Auth": r"cloudinary:\/\/[0-9]{15}:[0-9A-Za-z]+@[a-z]+",
            'Firebase Key': r'AAAA[A-Za-z0-9_-]{7}:[A-Za-z0-9_-]{140}',
            "LinkedIn Secret Key": r"(?i)linkedin(.{0,20})?['\"][0-9a-z]{16}['\"]",
            "Mailto String": r"(?<=mailto:)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+",
            "Picatic API Key": r"sk_live_[0-9a-z]{32}",
            "Firebase URL": r".*firebaseio\.com",
            "PGP Private Key Block": r"-----BEGIN PGP PRIVATE KEY BLOCK-----",
            "SSH (DSA) Private Key": r"-----BEGIN DSA PRIVATE KEY-----",
            "SSH (EC) Private Key": r"-----BEGIN EC PRIVATE KEY-----",
            "SSH (RSA) Private Key": r"-----BEGIN OPENSSH PRIVATE KEY-----",
            "SSH (ssh-ed25519) Public Key": r"ssh-ed25519",
            'Google Captcha Key': r'6L[0-9A-Za-z-_]{38}|^6[0-9a-zA-Z_-]{39}$',
            "Amazon AWS Access Key ID": r"AKIA[0-9A-Z]{16}",
            "Amazon MWS Auth Token": r"amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "Amazon AWS API Key": r"AKIA[0-9A-Z]{16}",
            'Amazon AWS URL' : r's3\.amazonaws.com[/]+|[a-zA-Z0-9_-]*\.s3\.amazonaws.com',
            "Generic API Key": r"(?i)api[_]?key.*['|\"]\w{32,45}['|\"]",
            "Generic Secret": r"(?i)secret.*['|\"]\w{32,45}['|\"]",
            'Authorization Bearer': r'bbearer [a-zA-Z0-9_\\-\\.=]+',
            'Authorization Basic': r'basic [a-zA-Z0-9=:_\+\/-]{5,100}',
            'Authorization API Key' : r'api[key|_key|\s+]+[a-zA-Z0-9_\-]{5,100}',
            'PayPal Braintree Access Token' : r'access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}',
            'Mailgun API Key' : r'key-[0-9a-zA-Z]{32}',
            "MailChimp API Key": r"[0-9a-f]{32}-us[0-9]{1,2}",
            'RSA Private Key' : r'-----BEGIN RSA PRIVATE KEY-----',
            "JWT Token": r'ey[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$',
            "Facebook Access Token": r"EAACEdEose0cBA[0-9A-Za-z]+",
            "Facebook OAuth": r"(?i)facebook.*['|\"][0-9a-f]{32}['|\"]",
            "Google OAuth" : r'ya29\.[0-9A-Za-z\-_]+',
            "Facebook Client ID": r"""(?i)(facebook|fb)(.{0,20})?['\"][0-9]{13,17}""",
            "Google Cloud Platform API Key": r"(?i)\b(AIza[0-9A-Za-z\\-_]{35})(?:['|\"|\n|\r|\s|\x60]|$)",
            "Google Cloud Platform OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "Google Drive API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "Google Drive OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "Google (GCP) Service-account": r"\"type\": \"service_account\"",
            "Google Gmail API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "Google Gmail OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "Google OAuth Access Token": r"ya29\\.[0-9A-Za-z\\-_]+",
            "Google YouTube API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "Google YouTube OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            'GitHub Access Token' : r'[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*',
            "GitHub Personal Access Token": r"ghp_[0-9a-zA-Z]{36}",
            "GitHub URL": r"(?i)github.*['|\"][0-9a-zA-Z]{35,40}['|\"]",
            "GitHub App Token": r"(ghu|ghs)_[0-9a-zA-Z]{36}",
            "Slack Token": r"(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})",
            "Slack Webhook": r"https://hooks.slack.com/services/T\w{8}/B\w{8}/\w{24}",
            "Slack Webhook 2": r"T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}",
            "Slack OAuth v2 Username/Bot Access Token": r"xoxb-[0-9]{11}-[0-9]{11}-[0-9a-zA-Z]{24}",
            "Slack OAuth v2 Configuration Token": r"xoxe.xoxp-1-[0-9a-zA-Z]{166}",
            "Picatic API Key": r"sk_live_[0-9a-z]{32}",
            "Stripe API Key": r"sk_live_[0-9a-zA-Z]{24}",
            "Stripe Restricted API Key": r"rk_live_[0-9a-zA-Z]{24}",
            "Twitter Access Token": r"(?i)twitter.*[1-9][0-9]+-\w{40}",
            "Twitter OAuth": r"(?i)twitter.*['|\"]\w{35,44}['|\"]",
            "Twitter Client ID": r"(?i)twitter(.{0,20})?['\"][0-9a-z]{18,25}",
            "URL Parameter": r"(?<=\?|\&)[a-zA-Z0-9_]+(?=\=)",
            "Twilio API Key": r"SK[0-9a-fA-F]{32}",
            "Square Access Token": r"sq0atp-[0-9A-Za-z\\-_]{22}",
            "Square OAuth Secret": r"sq0csp-[0-9A-Za-z\\-_]{43}",
            "URL": r'(https?|ftp)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?$iS',
            "Adobe Client Secret": r'''(?i)\b((p8e-)[a-zA-Z0-9]{32})(?:['|\"|\n|\r|\s|\x60]|$)''',
            "Alibaba AccessKey ID": r"(?i)\b((LTAI)[a-zA-Z0-9]{20})(?:['|\"|\n|\r|\s|\x60]|$)",
            "Clojars API Token": r"(?i)(CLOJARS_)[a-z0-9]{60}",
            "Doppler API Token": r"(dp\.pt\.)[a-zA-Z0-9]{43}",
            "Dynatrace API Token": r"dt0c01\.[a-zA-Z0-9]{24}\.[a-z0-9]{64}",
            "EasyPost API Token": r"EZAK[a-zA-Z0-9]{54}",
            "GitLab Personal Access Token": r"glpat-[0-9a-zA-Z\-\_]{20}",
            "NPM Access Token": r"(?i)\b(npm_[a-z0-9]{36})(?:['|\"|\n|\r|\s|\x60]|$)",
            "Shopify Private APP Access Token": r"shppa_[a-fA-F0-9]{32}",
            "Shopify Shared Secret": r"shpss_[a-fA-F0-9]{32}",
            "Shopify Custom Access Token": r"shpca_[a-fA-F0-9]{32}",
            "Shopify Access Token": r"shpat_[a-fA-F0-9]{32}",
            'Stripe API Key': r"sk_live_[0-9a-zA-Z]{24}",
            'Slack Token': r"(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})",
            'Twilio API Key': r"SK[0-9a-fA-F]{32}",
            'PayPal Braintree Access Token': r'access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}',
            'GitHub Personal Access Token': r"ghp_[0-9a-zA-Z]{36}",
            "GitHub App Token": r"(ghu|ghs)_[0-9a-zA-Z]{36}",
            "Mailgun API Key": r"key-[0-9a-zA-Z]{32}",
            "MailChimp API Key": r"[0-9a-f]{32}-us[0-9]{1,2}",
            "Google OAuth": r'ya29\.[0-9A-Za-z\-_]+',
            "Google Cloud Platform API Key": r"(?i)\b(AIza[0-9A-Za-z\\-_]{35})(?:['|\"|\n|\r|\s|\x60]|$)",
            "Google Drive API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "Facebook OAuth": r"(?i)facebook.*['|\"][0-9a-f]{32}['|\"]",
            "GitLab Personal Access Token": r"glpat-[0-9a-zA-Z\-\_]{20}",
            "Shopify Private APP Access Token": r"shppa_[a-fA-F0-9]{32}",
            "Shopify Access Token": r"shpat_[a-fA-F0-9]{32}",
            "Stripe Restricted API Key": r"rk_live_[0-9a-zA-Z]{24}",
            "Shopify Custom Access Token": r"shpca_[a-fA-F0-9]{32}",
            "Slack Webhook": r"https://hooks.slack.com/services/T\w{8}/B\w{8}/\w{24}",
            "Slack OAuth v2 Username/Bot Access Token": r"xoxb-[0-9]{11}-[0-9]{11}-[0-9a-zA-Z]{24}",
            "Facebook Access Token": r"EAACEdEose0cBA[0-9A-Za-z]+",
            "Amazon MWS Auth Token": r"amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
            "GitHub URL": r"(?i)github.*['|\"][0-9a-zA-Z]{35,40}['|\"]",
            "Google Gmail API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "Google OAuth Access Token": r"ya29\\.[0-9A-Za-z\\-_]+",
            "Google YouTube API Key": r"AIza[0-9A-Za-z\\-_]{35}",
            "GitHub Personal Access Token": r"ghp_[0-9a-zA-Z]{36}",
            "Google (GCP) Service-account": r"\"type\": \"service_account\"",
            "Amazon AWS API Key": r"AKIA[0-9A-Z]{16}",
            "Google Cloud Platform OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "Google Gmail OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "Google (GCP) Service-account": r"\"type\": \"service_account\"",
            "Google OAuth Access Token": r"ya29\\.[0-9A-Za-z\\-_]+",
            "Google YouTube OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "GitHub Access Token": r'[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*',
            "Twilio API Key": r"SK[0-9a-fA-F]{32}",
            "Google Drive OAuth": r"[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com",
            "PayPal Braintree Access Token": r'access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}',
            "Slack Webhook 2": r"T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}",
            "Stripe API Key": r"sk_live_[0-9a-zA-Z]{24}",
            "Firebase Key": r'AAAA[A-Za-z0-9_-]{7}:[A-Za-z0-9_-]{140}',
            "Square Access Token": r"sq0atp-[0-9A-Za-z\\-_]{22}",
            "Square OAuth Secret": r"sq0csp-[0-9A-Za-z\\-_]{43}",
            "Mailchimp API Key": r"[0-9a-f]{32}-us[0-9]{1,2}",
            "Slack Webhook": r"https://hooks.slack.com/services/T\w{8}/B\w{8}/\w{24}",
            "Slack Webhook 2": r"T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}",
            "Stripe Restricted API Key": r"rk_live_[0-9a-zA-Z]{24}",
            "Stripe API Key": r"sk_live_[0-9a-zA-Z]{24}",
            "Google Captcha Key": r'6L[0-9A-Za-z-_]{38}|^6[0-9a-zA-Z_-]{39}$',
            "GitHub Access Token": r'[a-zA-Z0-9_-]*:[a-zA-Z0-9_\-]+@github\.com*',
            "Slack Token": r"(xox[p|b|o|a]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})",
            "GitHub Personal Access Token": r"ghp_[0-9a-zA-Z]{36}",
            "Slack Webhook": r"https://hooks.slack.com/services/T\w{8}/B\w{8}/\w{24}",
            "GitHub Personal Access Token": r"ghp_[0-9a-zA-Z]{36}",
            "Google OAuth Access Token": r"ya29\\.[0-9A-Za-z\\-_]+",
            "Google Cloud Platform API Key": r"(?i)\b(AIza[0-9A-Za-z\\-_]{35})(?:['|\"|\n|\r|\s|\x60]|$)",
            "Asana Client ID": r"""(?i)(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([0-9]{16})(?:['|\"|\n|\r|\s|\x60|;]|$)""",
            "Asana Client Secret": r"""(?i)(?:asana)(?:[0-9a-z\-_\t .]{0,20})(?:[\s|']|[\s|"]){0,3}(?:=|>|:=|\|\|:|<=|=>|:)(?:'|\"|\s|=|\x60){0,5}([a-z0-9]{32})(?:['|\"|\n|\r|\s|\x60|;]|$)"""
        }
        files = [os.path.join(self.domain_dir, f) for f in os.listdir(self.domain_dir) if os.path.isfile(os.path.join(self.domain_dir, f))]
        console.print("[bold red]Scanning in Progress...[/bold red]")
        found = False
        with tqdm.tqdm(total=len(files), desc="Files", unit="file") as pbar:
            for file_path in files:
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    for line in f:
                        for key, pattern in regex_list.items():
                            match = re.findall(pattern, line)
                            if match:
                                console.print(f"\n[[green]+[/]] [yellow]{key}[/] found in [yellow]{file_path}[/]: {match}\n", highlight=False)
                                found = True
                pbar.update(1)
        if not found:
            console.print("[yellow]No Sensitive Info Found[/yellow]")

if __name__ == "__main__":
    print(ascii_art)
    parser = argparse.ArgumentParser(description="Download and beautify JavaScript files from a URL.")
    parser.add_argument("url", help="The URL to fetch JS files from.")
    parser.add_argument("-c", "--cookies", help="Cookie string (e.g., 'name=value')", default="")
    parser.add_argument("-p", "--proxy", help="Use Burp Suite proxy (e.g., 'http://127.0.0.1:8080')", default=None)
    parser.add_argument("-b", "--burp-cert", help="Path to Burp Suite CA certificate (for SSL verification). Please change .der format to .pem format with openssl x509 -inform der -in burp-cert.der -out burp-cert.pem", default=None)

    args = parser.parse_args()
    cookies = parse_cookie(args.cookies) if args.cookies else {}
    proxies = {"http": args.proxy, "https": args.proxy} if args.proxy else None
    cert = args.burp_cert if args.burp_cert else None
    app = Check(args.url, cookies=cookies, proxies=proxies, cert=cert)
    result = app.download_and_beautify()
    if os.path.exists(app.domain_dir):
        app.scan()
    if "Downloaded" in result:
        print(result)