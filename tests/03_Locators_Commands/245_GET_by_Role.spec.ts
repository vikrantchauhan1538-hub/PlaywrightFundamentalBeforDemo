import { test, expect } from '@playwright/test';
test('Verify getbyrole in playwright', async ({ page }) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php');

    await page.getByRole('link', { name: 'Make Appointment' }).click();

});