import { waitForSeconds } from './Time.js';

// export default async function dragAndDrop(id, page, x, y) {

//     console.log("Called");

//     const source = await page.$(id);

//     await waitForSeconds(2);

//     const srcBox = await source.boundingBox();

//     await page.mouse.move(srcBox.x + srcBox.width / 2, srcBox.y + srcBox.y / 2);

//     await page.mouse.down();

//     await page.mouse.move(x,y);

//     await page.mouse.up();

//     await waitForSeconds(2);

//     console.log("Executed");

// } 

export default async function dragAndDrop(source, target, page) {

    const src = await page.waitForSelector(source);
    const dst = await page.waitForSelector(target);

    await waitForSeconds(2);

    const srcBoc = await src.boundingBox();
    const dstBox = await dst.boundingBox();

    await page.mouse.move(srcBoc.x + srcBoc.width / 2, srcBoc.y + srcBoc.height / 2);
    await page.mouse.down();

    await page.mouse.move(dstBox.x + dstBox.width / 2, dstBox.y + dstBox.height / 2);
    await page.mouse.up();

}