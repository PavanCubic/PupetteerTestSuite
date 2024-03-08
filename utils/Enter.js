import {setTimeout} from 'timers/promises'

export default async function handleEnter(id, text, page) {
    await setTimeout(1000);
    await page.type(id, text, { delay: 100 });
    await setTimeout(3000);
    await page.keyboard.press('Enter');
}