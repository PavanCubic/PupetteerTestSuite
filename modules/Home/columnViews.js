import launchAndGet from "../../launch/index.js";
import * as fs from 'fs';
import handleButton from "../../utils/ButtonClick.js";
import dragAndDrop from "../../utils/dragAnd.js";
import { waitForSeconds } from "../../utils/Time.js";

(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx';

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/Home/views.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.editCols, page);

    // await handleMouse(IDS.reqDate, page, 1000, 200);

    // await dragAndDrop(IDS.reqDate, page, 100, 500);

    // await dragAndDrop(IDS.reqDate, IDS.loc, page);

    await dragAndDrop(IDS.loc, IDS.req, page);

    await waitForSeconds(1);

    await handleButton(IDS.save, page);

    await waitForSeconds(3);

    await dragAndDrop(IDS.reqDate, IDS.status, page);

    await waitForSeconds(1);

    // await handleMouse(IDS.req, page, 3000, 200);

    // await setTimeout(2000);

    // await handleButton(IDS.save, page);

    // await setTimeout(3000);

    // await handleButton(IDS.close, page);

})()