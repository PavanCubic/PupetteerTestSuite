import { waitForSeconds } from "./Time.js";

export default async function handleClick(id, page){
    waitForSeconds(0.5);
    await page.click(id, {clickCount:1})
}