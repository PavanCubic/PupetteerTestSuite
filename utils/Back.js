import { waitForSeconds } from "./Time.js";

export default async function backSpace(id, page) {
    await page.click(id, { clickCount: 3 });
    await waitForSeconds(1);
    await page.keyboard.press('Backspace');
}