import launchAndGet from "../../launch/index.js"
import * as fs from 'fs'
import handleButton from "../../utils/ButtonClick.js";
import dragAndDrop from "../../utils/dragAnd.js";
import { waitForSeconds } from "../../utils/Time.js";

(async() => {
    
    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);

    const IDS = JSON.parse(fs.readFileSync('modules/Draft/drafthome.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.draft, page);

    // Functions
    await editColumnList(IDS, page);

})()

const editColumnList = async(IDS, page) => {

    await waitForSeconds(3);

    await handleButton(IDS.cols, page);

    await waitForSeconds(2);

    await dragAndDrop(IDS.loc, IDS.positions, page);

    await waitForSeconds(2);

    await handleButton(IDS.save, page);

}