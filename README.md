# Playwright Tests with Allure
Automated tests for learning Playwright with **Page Object Model (POM)** and **Allure reporting**.

---

## Project Structure

├── tests/ # Playwright test files
├── tests/ # Page Object classes
├── allure-results/ # Raw Allure results
├── allure-report/ # Generated HTML reports
├── package.json
└── README.md
---

## Setup
```bash
git clone https://github.com/your-username/learning-playwright-5911873.git
cd learning-playwright-5911873
npm install
npx playwright install
Make sure Java is installed and JAVA_HOME is set for Allure.

## Scripts
Command	Description
npm test	Run all tests
npm run test:chromium	Run tests in Chromium
npm run test:first	Run tests tagged with @first
npm run test:local	Run tests with BASE_URL=http://localhost:4200
npm run test:report	Run tests with Allure, generate and open report
npm run test:ui	    Launch Playwright Test Runner UI
npm run report:serve	Serve Allure report

## Allure Reporting
npm run test:report
Generates a report in allure-report/ and opens it in your browser.

## Notes
Playwright v1.55.0
Allure reporter configured via allure-playwright
Tests follow POM pattern


