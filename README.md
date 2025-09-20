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

## Running Tests on GitHub
Manual Workflow Run

Go to the Actions tab in your repository.
Select the workflow Playwright Tests with Allure.
Click Run workflow and choose the branch (usually master).

Artifact
After the workflow completes, download the allure-report artifact from the Actions run page.
Extract the archive and open index.html in your browser.

Online Report via GitHub Pages
The Allure report is automatically deployed to GitHub Pages.
Access it at:
https://<your-username>.github.io/<repository-name>/
The report updates after each successful workflow run.

## Notes
Playwright v1.55.0
Allure reporter configured via allure-playwright
Tests follow POM pattern


```
