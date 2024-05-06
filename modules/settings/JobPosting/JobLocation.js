import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import * as fs from 'fs'
import handleType from "../../../utils/Type.js";
import { waitForSeconds } from "../../../utils/Time.js";
import backSpace from "../../../utils/Back.js";

(async () => {

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/JobPosting/JobLocation.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.JobLocations, page);

    await waitForSeconds(2);

    // Functions
    // await addLocations(IDS, page, edit);
    // await updateLocations(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateCity(IDS, page, edit);
    await validateOnUpdate(IDS, page, edit);

})();

const addLocations = async (IDS, page, edit) => {

    await handleButton(IDS.addLocation, page);

    await handleType(IDS.locName, 'HSR Layout', page, edit = false);

    await handleType(IDS.locRemarks, 'Nothing', page, edit = false);

    // Toggle
    // await handleButton(IDS.locToggle, page);

    await handleButton(IDS.locSave, page);
}

const updateLocations = async (IDS, page, edit) => {

    // await handleButton(IDS.options, page);

    await handleButton(IDS.edit, page);

    await handleType(IDS.locName, 'bengaluru edited', page, edit = true);

    await handleType(IDS.locRemarks, 'edited for test', page, edit = true);

    // Toggle
    // await handleButton(IDS.locToggle, page);

    await handleButton(IDS.locSave, page);
}

const validateEmpty = async (IDS, page) => {

    await handleButton(IDS.addLocation, page);

    await handleButton(IDS.locSave, page);
} 

const validateCity = async(IDS, page, edit) => {

    await handleButton(IDS.addLocation, page);

    await handleType(IDS.locRemarks, 'remarks', page, edit=false);

    await handleButton(IDS.locSave, page);
}

const validateOnUpdate = async(IDS, page, edit) => {

    await waitForSeconds(2);

    await handleButton(IDS.edit, page);

    await waitForSeconds(2);

    await backSpace(IDS.locName, page);

    await handleButton(IDS.locSave, page);

    await waitForSeconds(3);

    await handleType(IDS.locName, 'edit', page, edit=false);

    await handleButton(IDS.locSave, page);
}