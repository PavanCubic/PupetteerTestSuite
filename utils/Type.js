import { setTimeout } from 'node:timers/promises'

// Type 
export default async function handleType(id, text, page, edit) {
    await setTimeout(1000)
    if (!edit) {
        await setTimeout(1000)
        await page.type(id, text, { delay: 200 })
    }
    else {
        await page.click(id, { clickCount: 4 });
        await setTimeout(1000)
        await page.type(id, text, { delay: 100 })
    }
}
