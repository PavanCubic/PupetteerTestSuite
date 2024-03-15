import launchAndGet from "../../launch/index.js"
import * as fs from 'fs'
import handleButton from "../../utils/ButtonClick.js";
import dragAndDrop from "../../utils/dragAnd.js";
import { waitForSeconds } from "../../utils/Time.js";

(async() => {
    
    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx'

    const page = await launchAndGet(baseUrl);

    const IDS = JSON.parse(fs.readFileSync('modules/Draft/drafthome.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

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