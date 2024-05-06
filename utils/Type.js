import { waitForSeconds } from "./Time.js";

// Type 
export default async function handleType(id, text, page, edit) {
    await waitForSeconds(1)
    if (!edit) {
        await waitForSeconds(1)
        await page.type(id, text)
    }
    else {
        await page.click(id, { clickCount: 4 });
        await waitForSeconds(1)
        await page.type(id, text)
    }
}
