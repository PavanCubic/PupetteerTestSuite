import { setTimeout } from 'node:timers/promises'

// Type 
export default async function handleType(id, text, page, edit) {
    setTimeout(2000)
    if (!edit) {
        setTimeout(2000)
        await page.type(id, text, { delay: 200 })
    }
    else {
        await page.click(id, { clickCount: 4 });
        setTimeout(2000)
        await page.type(id, text, { delay: 100 })
    }
}
