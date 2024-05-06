import launchAndGet from "../../../launch/index.js"
import * as fs from 'fs'
import handleButton from "../../../utils/ButtonClick.js";
import { waitForSeconds } from "../../../utils/Time.js";
import handleType from "../../../utils/Type.js";

(async() => {

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl); 

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/RequisitionTemplates/JDtemplate.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.Settings, page);

    await waitForSeconds(2);

    await handleButton(IDS.Jd, page);

    await waitForSeconds(2);

    await handleButton(IDS.add, page);

    await handleType(IDS.name, 'testinf', page, edit=false);

    await handleType(IDS.desc, 'testinf again', page, edit=false);

    // await handleType(IDS.content, 'Lorem ipsum, do re mi fa so....', page, edit=false);

    await handleButton(IDS.save, page);

})()