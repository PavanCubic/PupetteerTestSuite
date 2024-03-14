export default async function handleDrop(id, page, key) {
    await page.click(id);
    var i = 1;
    while (i < key) {
        await page.keyboard.press('ArrowDown');
        i++;
    }
    await page.keyboard.press('Enter');
}