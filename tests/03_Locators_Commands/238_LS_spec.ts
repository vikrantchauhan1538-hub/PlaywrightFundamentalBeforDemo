import { test, expect } from '@playwright/test';
test('Verify the title of the page and logo', async ({ page }) => {

    await page.goto('https://app.vwo.com');
});