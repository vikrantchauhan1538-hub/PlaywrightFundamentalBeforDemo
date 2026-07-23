import { test, expect } from '@playwright/test';

test.describe.configure({ timeout: 70000 });
test.use({ ignoreHTTPSErrors: true });


async function openLoginPage(page) {
    let lastError;

    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
                waitUntil: 'commit',
                timeout: 30000
            });
            await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 15000 });
            return;
        } catch (error) {
            lastError = error;
        }
    }

    throw lastError;
}


async function performValidLogin(page) {
    await openLoginPage(page);
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL(/.*dashboard\/index/);

}

test('Verify validation when user tries to log in with invalid credentials', async ({ page }) => {

    await openLoginPage(page);
    await page.locator('input[name="username"]').fill('Admin123');
    await page.locator('input[name="password"]').fill('admin123');

    await page.locator('button[type="submit"]').click();

    const alertMessage = page.locator('.oxd-alert-content-text');
    await expect(alertMessage).toHaveText('Invalid credentials');
});

test('Verify validation when user leaves both fields blank and tries to log in', async ({ page }) => {

    await openLoginPage(page);

    await page.locator('button[type="submit"]').click();

    const errorMessages = page.locator('.oxd-input-field-error-message');

    await expect(errorMessages.first()).toHaveText('Required');
    await expect(errorMessages).toHaveCount(2);
});


test('TC_03_ Verify functionality where user navigate to Dashboard page after successful login', async ({ page }) => {
    await performValidLogin(page);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveTitle(/OrangeHRM/);

});

test('TC_04 Verify functionality where user finds Charlotte and clicks delete icon in PIM page', async ({ page }) => {
    await performValidLogin(page);
    const tableRow = page.locator('.oxd-table-body .oxd-table-card');

    await page.locator("a.oxd-main-menu-item:has(span:has-text('PIM'))").click();
    await expect(page).toHaveURL(/.*pim\/viewEmployeeList/);
    await tableRow.first().waitFor();

    const targetRow = tableRow.filter({ hasText: 'Charlotte' });
    await expect(targetRow).toHaveCount(1);

    await targetRow.locator('button:has(i.bi-trash)').first().click();
    await expect(page.locator('.oxd-dialog-container-default')).toBeVisible();

}); 
