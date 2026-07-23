import { test, expect } from '@playwright/test';
test('TC_01 Verify functionality for Make Appointment link', async ({ page }) => {

    await test.step('Open CURA profile page', async () => {
        await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php');
    });

    await test.step('Click Make Appointment link', async () => {
        let makeappointmentlink = await page.getByRole('link', { name: 'Make Appointment' });
        await makeappointmentlink.click();
    });

    //Assertion to check user navigate to Make Appointment page

    await test.step('Verify Login page is visible', async () => {
        let makeappointmentpage = await page.getByRole('heading', { name: 'Login' });
        await expect(makeappointmentpage).toBeVisible();
        console.log('User is navigated to Make Appointment page');
    });



    await test.step('Verify demo account title is visible', async () => {
        let Demoaccounttitle = await page.getByText('Demo account', { exact: false });
        await expect(Demoaccounttitle).toBeVisible();
        console.log('Demo account title is visible on the page');
    });
});


test('TC_02 Verify functionality to login with valid credentials', async ({ page }) => {

    await test.step('Open CURA login page', async () => {
        await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    });

    await test.step('Enter username', async () => {
        let username = await page.locator('#txt-username');
        await username.fill('John Doe');
    });

    await test.step('Enter password', async () => {
        let password = await page.locator('#txt-password');
        await password.fill('ThisIsNotAPassword');
    });

    await test.step('Click Login button', async () => {
        let loginButton = await page.getByRole('button', { name: 'Login' });
        await loginButton.click();
    });

    //Assertion to check user is navigate  appointment url

    await test.step('Verify appointment URL after login', async () => {
        await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
        console.log('Valid url -appointment page is visible after login with valid credentials');
    });

    //2ndassertion to check user is navigate  appointment url

    await test.step('Verify hospital readmission checkbox is visible', async () => {
        let hospitalreadmission = await page.getByRole('checkbox', { name: 'Apply for hospital readmission' });
        await expect(hospitalreadmission).toBeVisible();
        console.log('100% appointmen page checkbox is visible after login with valid credentials');
    });
});

