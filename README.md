
# 🔍 JSFETCHER - A JS Snippet Extractor & Beautifier

This tool fetches JavaScript files from a given website URL, beautifies them using `jsbeautifier`, and saves the results in a directory named after the domain (e.g., `cisco`, `vimeo`, etc.).

## 🚀 Features

- Extracts all linked JS files from `<script src="...">`
- Beautifies each JavaScript file
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
python script.py <url>
```

### Example:

```bash
python script.py https://cisco.com
```

✅ This will:
- Fetch all JS files from `https://cisco.com`
- Beautify them
- Save them inside a folder named `cisco`

## 🧠 Supported Extensions

`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.cjs`, `.es6`, `.es`, `.jse`, `.vue`


## 📄 License

MIT License