import { test, expect } from '@playwright/test';

test('Verify Web Table Data Traversing', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable.html', { waitUntil: 'domcontentloaded', timeout: 60000 });


    // const rows = page.locator('#customers tbody tr');
    // const rowCount = await rows.count();

    // for (let i = 1; i < rowCount; i++) { // Skipping row 0 (header)
    //     const rowCells = await rows.nth(i).locator('td').allInnerTexts();
    //     console.log(`Row ${i} Data:`, rowCells);
    // }


    const row = await page.locator('//*[@id="customers"]/tbody/tr').count();
    console.log("Total number of rows in the table: " + row);
    const column = await page.locator('//*[@id="customers"]/tbody/tr[2]/td').count();
    console.log("Total number of columns in the table: " + column);

    for (let i = 2; i <= row; i++) {
        for (let j = 1; j <= column; j++) {
            const cellData = await page.locator(`//*[@id="customers"]/tbody/tr[${i}]/td[${j}]`).textContent();
            console.log(`Row ${i}, Column ${j}: ${cellData}`);

            if (cellData?.trim() === 'Helen Bennett') {
                console.log(`Found 'Helen Bennett' at Row ${i}, Column ${j}`);
                console.log('Country of helen Bennett is: ' + await page.locator(`//*[@id="customers"]/tbody/tr[${i}]/td[${j}]/following-sibling::td[1]`).innerText());
                break;
            }
        }




    }
});