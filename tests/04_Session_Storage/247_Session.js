const { chromium } = require('playwright');

async function sessionStorage() {
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Perform actions on the page here
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.waitForTimeout(5000); // Wait for the page to load after login
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', { timeout: 15000 });

    await context.storageState({ path: 'sessionStorage.json' });
    await browser.close();


}

sessionStorage();
