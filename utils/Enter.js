import { waitForSeconds } from "./Time.js";

export default async function handleEnter(id, text, page) {
    await waitForSeconds(1);
    await page.type(id, text);
    await waitForSeconds(1);
    await page.keyboard.press('Enter');
}