import { test, expect } from '@playwright/test';

test('Verify Web Table Data Traversing', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable1.html', { waitUntil: 'domcontentloaded', timeout: 60000 });


});