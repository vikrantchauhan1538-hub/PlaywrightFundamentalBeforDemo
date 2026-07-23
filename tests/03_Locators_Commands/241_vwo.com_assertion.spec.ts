import { test, expect } from '@playwright/test';

test('Verify validation when user enter invalid email', async ({ page }) => {

    await page.goto('https://vwo.com/free-trial/');

    await page.locator("//input[@id='page-v1-step1-email']").fill('testdata');
    await page.locator("[id='page-free-trial-step1-cu-gdpr-consent-checkbox']").click();
    await page.locator("//button[@type='submit' and text()='Create a Free Trial Account']").click();

    let errorMessage = await page.locator("//div[text()='The email address you entered is incorrect.']");
    console.log("Error message is : " + await errorMessage.textContent());
    await expect(errorMessage).toHaveText('The email address you entered is incorrect.');

});