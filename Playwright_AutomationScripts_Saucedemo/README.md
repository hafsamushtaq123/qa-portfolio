# 🧪 Playwright Automation Framework - SauceDemo

## 📌 Project Overview
This is an end-to-end UI automation testing framework built using **Playwright with JavaScript**.  
The project automates the SauceDemo web application to validate real-world user flows such as login, product selection, cart management, and checkout process.

The framework follows the **Page Object Model (POM)** design pattern to ensure scalability, maintainability, and clean separation of test logic and page actions.

This project demonstrates practical QA automation skills including functional testing, negative testing, cross-browser testing, and debugging using Playwright tools like Trace Viewer and HTML Reporter.

---

## 🛠️ Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- HTML Reporter
- Trace Viewer

---

## 🚀 Features
- ✔ Valid login test  
- ✔ Invalid login test (negative testing)  
- ✔ Add to cart functionality test  
- ✔ Checkout flow test (end-to-end purchase flow)  
- ✔ Page Object Model structure  
- ✔ Cross-browser testing (Chrome, Firefox, WebKit)  
- ✔ HTML test reporting  
- ✔ Trace Viewer debugging support  

---

## 📂 Project Structure
```plaintext id="p9xq7l"
playwright-saucedemo-automation/
│
├── tests/                  # Test cases (spec files)
│   ├── Login.spec.js
│   ├── Addtocart.spec.js
│   ├── Checkout.spec.js
│
├── pages/                  # Page Object Model classes
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│
├── screenshots/            # Test evidence (reports, trace screenshots)
│   ├── TestReport.png
│   ├── Checkouttest_Traceviewer.png
│
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies
├── package-lock.json
├── README.md               # Project documentation
├── .gitignore              # Ignored files (node_modules, reports)