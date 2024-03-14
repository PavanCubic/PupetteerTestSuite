import launchAndGet from "../../../launch/index.js"
import * as fs from 'fs'
import { setTimeout } from "timers/promises";
import handleButton from "../../../utils/ButtonClick.js";
import handleType from "../../../utils/Type.js";
import handleDrop from "../../../utils/dropDown.js";
import { waitForSeconds } from "../../../utils/Time.js";

(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx';
    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/CustomFields/addFields.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.Settings, page);

    await waitForSeconds(2);

    await handleButton(IDS.customFields, page);

    await waitForSeconds(2);

    // Functions
    // await addCustomFields(IDS, page, edit);
    // await updateCustomFields(IDS, page, edit);
    await validateEmpty(IDS, page);
    // await validateAllAdd(IDS, page, edit);
    // await deleteField(IDS, page);

})()

const addCustomFields = async (IDS, page, edit) => {

    await handleButton(IDS.addField, page);

    await handleType(IDS.colName, 'Test - 1', page, edit = false);

    await handleDrop(IDS.colType, page, 2);

    await handleDrop(IDS.colCategory, page, 2);

    // Toggle
    // await handleButton(IDS.tog, page);

    await handleButton(IDS.save, page);
}

const updateCustomFields = async (IDS, page, edit) => {

    // await handleButton(IDS.options, page);

    await handleButton(IDS.edit, page);

    await handleType(IDS.colName, 'Test edit', page, edit = true);

    // Toggle
    // await handleButton(IDS.tog, page);

    await handleButton(IDS.save, page);
}

const validateEmpty = async(IDS, page) => {

    await handleButton(IDS.addField, page);

    await handleButton(IDS.save, page);

}

const validateAllAdd = async(IDS, page, edit) => {

    await handleButton(IDS.addField, page);

    await handleType(IDS.colName, 'testEmpty', page, edit=false);

    await handleButton(IDS.save, page);

    await waitForSeconds(3);

    await handleDrop(IDS.colType, page, 1);

    await handleButton(IDS.save, page);

    await waitForSeconds(3);

    await handleDrop(IDS.colCategory, page, 1);

    await handleButton(IDS.save, page);
}

const deleteField = async(IDS, page) => {

    await handleButton(IDS.delete, page);
    
}