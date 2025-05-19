
# 🔍 Byomkesh - Personal Javascript Detective

This tool fetches JavaScript files from a given website URL, beautifies them using `jsbeautifier`, and saves the results in a directory named after the domain (e.g., `example`, `vimeo`, etc.) then automatically search for api keys and secrets.

![A tribute to Saradindu Babu](https://www.getbengal.com/uploads/story_image/bomkesh-&-sadindu.jpg)


## 🚀 Features

- Extracts all linked JS files from `<script src="...">`
- Beautifies each JavaScript file
- Scan for know secrets and API Keys
- Saves output in a clean folder named after the domain
- Supports multiple extensions: `.js`, `.ts`, `.vue`, etc.
- Fun CLI spinner and colorful output

## 📦 Requirements

- Python 3.x
- Install dependencies:

```bash
pip install requests beautifulsoup4 jsbeautifier
```

## 📁 Usage

```bash
usage: byomkesh.py [-h] [-c COOKIES] [-p PROXY] [-b BURP_CERT] url

Download and beautify JavaScript files from a URL.

positional arguments:
  url                   The URL to fetch JS files from.

options:
  -h, --help            show this help message and exit
  -c, --cookies COOKIES
                        Cookie string (e.g., 'name=value')
  -p, --proxy PROXY     Use Burp Suite proxy (e.g., 'http://127.0.0.1:8080')
  -b, --burp-cert BURP_CERT
                        Path to Burp Suite CA certificate (for SSL verification). Please change .der format to .pem
                        format with openssl x509 -inform der -in burp-cert.der -out burp-cert.pem
                                                                                                                      
```

### Example:

```bash
python3 byomkesh.py https://example.com -c 'Cookie:Example_cookie' -p http://127.0.0.1:80 -b /home/cert.pem
```

✅ This will:
- Fetch all JS files from `https://example.com`
- Beautify them
- Save them inside a folder named `example.com`

## 🧠 Supported Extensions

`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`, `.es6`, `.es`, `.jse`, `.vue`


## 📄 License

MIT License