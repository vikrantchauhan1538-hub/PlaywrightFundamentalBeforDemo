import { test, expect } from '@playwright/test';

const referurl = ['https://www.google.com/',
    'https://www.bing.com/',
    'https://www.yahoo.com/'];

for (const ref of referurl) {
    test(`Verify functionality of referer link ${ref}`, async ({ page }) => {
        await page.goto('https://vwo.com/', {
            referer: ref
        });

        await page.waitForTimeout(3000);
    });
}