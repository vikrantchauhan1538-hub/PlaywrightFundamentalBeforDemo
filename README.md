# Playwright Fundamentals Demo

This repository contains a basic Playwright test automation project demonstrating fundamental concepts of end-to-end testing with [Playwright](https://playwright.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run tests for a specific browser:

```bash
npx playwright test --project=chromium
```

## Project Structure

- `tests/` - Contains test files
  - `example.spec.ts` - Sample tests demonstrating basic Playwright features
- `playwright.config.ts` - Playwright configuration file
- `package.json` - Node.js project dependencies and metadata
- `.gitignore` - Excludes `node_modules/`, test results, and reports

## Test Examples

The `example.spec.ts` file includes two sample tests against [playwright.dev](https://playwright.dev/):

1. **Has Title** - Verifies the page title contains "Playwright"
2. **Get Started Link** - Clicks the "Get started" link and verifies the "Installation" heading is visible

## Browsers

Tests are configured to run on:
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)

## HTML Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## License

ISC
