import launchAndGet from "../../launch/index.js";
import * as fs from 'fs';
import handleButton from "../../utils/ButtonClick.js";
import dragAndDrop from "../../utils/dragAnd.js";
import { waitForSeconds } from "../../utils/Time.js";

(async () => {

    // console.log(process.argv[1]);

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/Home/views.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.editCols, page);

    // await handleMouse(IDS.reqDate, page, 1000, 200);

    // await dragAndDrop(IDS.reqDate, page, 100, 500);

    // await dragAndDrop(IDS.reqDate, IDS.loc, page);

    await dragAndDrop(IDS.loc, IDS.req, page);

    await waitForSeconds(1);

    await handleButton(IDS.save, page);

    await waitForSeconds(3);

    await handleButton(IDS.editCols, page);

    await dragAndDrop(IDS.reqDate, IDS.status, page);

    await waitForSeconds(1);

    await handleButton(IDS.save, page);

    // await handleMouse(IDS.req, page, 3000, 200);

    // await setTimeout(2000);

    // await handleButton(IDS.save, page);

    // await setTimeout(3000);

    // await handleButton(IDS.close, page);

})()