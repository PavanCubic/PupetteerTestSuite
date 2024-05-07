import { waitForSeconds } from "./Time.js";

export default async function handleEnter(id, text, page) {
    await waitForSeconds(0.5);
    await page.type(id, text);
    await waitForSeconds(0.5);
    await page.keyboard.press('Enter');
}