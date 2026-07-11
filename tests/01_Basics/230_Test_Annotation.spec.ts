import { test, expect } from '@playwright/test';
test('Verify the title of the page', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - Wingify');
})


test.skip('Verify the title of the page', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - Wingify');
}

test.only('Verify the title of the page', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await expect(page).toHaveTitle('Login - Wingify');
}
test.describe('Verify the title of the page', () => {
    test('Verify the title of the page', async ({ page }) => {
        await page.goto('https://app.vwo.com');
        await expect(page).toHaveTitle('Login - Wingify');
    })

    test.fail('Verify the title of the page', async ({ page }) => {
        await page.goto('https://app.vwo.com');
        await expect(page).toHaveTitle('Login - Wingify');
    }