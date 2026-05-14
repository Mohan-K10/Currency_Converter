# 💱 Currency Converter
 
A clean, fast currency converter built with **React + Vite** and **Tailwind CSS**, using the free [Frankfurter API](https://frankfurter.dev/) — no API key required.
 
---
 
## ✨ Features
 
- 🌍 30+ world currencies powered by European Central Bank data
- 🔍 Searchable dropdown — filter by currency code or full name
- ⚡ Real-time conversion on demand
- 🎨 Dark themed UI with a minimal design
- 📦 Zero API key setup needed
---
 
## 🖥️ Tech Stack
 
| Technology | Purpose |
|---|---|
| React + Vite | Frontend framework & build tool |
| Tailwind CSS | Styling |
| Frankfurter API | Live exchange rate data |
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js v18+
- npm or yarn
### Installation
 
```bash
# Clone the repo
git clone https://github.com/Mohan-K10/currency-converter.git
 
# Navigate into the project
cd currency-converter
 
# Install dependencies
npm install
 
# Start the dev server
npm run dev
```
 
Then open [http://localhost:5173](http://localhost:5173) in your browser.
 
---
 
## 📁 Project Structure
 
```
src/
├── components/
│   └── SearchableSelect.jsx   # Custom searchable dropdown
├── Currencyinfo.js            # Frankfurter API call
├── MainPage.jsx               # Main UI
└── main.jsx
```
 
---
 
## 🔌 API Used
 
[**Frankfurter**](https://frankfurter.dev/) — Free, open source exchange rate API backed by the European Central Bank.
 
- No API key required
- 30+ major currencies
- Updates daily around 16:00 CET
```
GET https://api.frankfurter.dev/v2/latest?base=USD&quotes=INR
```
 
---
 
## 📸 Preview
 
> _Add a screenshot here — drag and drop an image into this section on GitHub_
 
---
 
## 📄 License
 
This project is open source under the [MIT License](LICENSE).
 
---
 
> Built by [Mohan](https://github.com/Mohan-K10) — part of a structured React learning roadmap 🚀
