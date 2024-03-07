// Button Click
export default async function handleButton(id, page) {
    const btn = await page.waitForSelector(id);
    await btn.click();
}
