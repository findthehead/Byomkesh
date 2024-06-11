import sys
import requests
from bs4 import BeautifulSoup

class Check:
    def __init__(self, url):
        self.url = url

    def find(self):
        r = requests.get(self.url)
        soup = BeautifulSoup(r.content, 'html.parser')
        scripts = soup.find_all('script', src=True)
        js_urls = []
        for script in scripts:
            js_url = script['src']
            if js_url.endswith('.js'):
                js_urls.append(js_url)
        if js_urls:
            for js in js_urls:
                print(js)
            return ""  # Explicitly return an empty string if JavaScript files are found
        else:
            return "No JavaScript files found."

if __name__ == "__main__":
    if len(sys.argv) < 2:
        # If no argument provided, print usage message and exit
        print("Usage: python script.py <url>")
        sys.exit(1)

    # Extract URL from command-line arguments
    url = sys.argv[1]
    app = Check(url)
    print(app.find())
