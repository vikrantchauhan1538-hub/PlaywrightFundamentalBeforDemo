import { test, expect } from '@playwright/test';

test('basic verify how to handle multiple elements in playwright', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    // await page.getByRole('link', { name: 'Transactions' }).click();

    const allTexts = await page.locator('//a[@class="list-group-item"]').allInnerTexts();

    for (const text of allTexts) {
        console.log(text);
        if (text == 'Transactions') {
            await page.getByRole('link', { name: 'Transactions' }).first().click();
            break;
        }
    }
    await page.waitForTimeout(7000);
});