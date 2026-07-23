import { test, expect } from '@playwright/test';

test('Verify functionality to student loged in with valid credentials', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const userName = page.getByRole('textbox', { name: 'Email Address' });
    userName.pressSequentially('Vikrant_chauhan12@gmail.com', { delay: 100 });
    await page.waitForTimeout(5000);

    const password = page.locator("//input[@id='password']");
    password.pressSequentially('Vikrant@123', { delay: 100 });
    await page.waitForTimeout(5000);

    const rememberMe = page.getByRole('checkbox', { name: 'Remember Me' });
    await rememberMe.check();
    await page.waitForTimeout(5000);

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();
    await page.waitForTimeout(5000);

    // Assertion to check url after login
    await expect(page).toHaveURL(/.*email=Vikrant_chauhan12%40gmail\.com.*password=Vikrant%40123.*#login-success/);
    await page.waitForTimeout(5000);
});