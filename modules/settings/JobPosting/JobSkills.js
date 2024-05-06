import launchAndGet from "../../../launch/index.js";
import * as fs from 'fs';
import handleButton from "../../../utils/ButtonClick.js";
import handleType from "../../../utils/Type.js";
import handleEnter from "../../../utils/Enter.js";
import { setTimeout } from "timers/promises";
import { waitForSeconds } from "../../../utils/Time.js";
import backSpace from "../../../utils/Back.js";

(async () => {

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/JobPosting/Jobskills.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.JobSkills, page);

    await waitForSeconds(2);

    // Functions
    // await addSkill(IDS, page, edit);
    // await updateSkill(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateUpdate(IDS, page, edit);

})();

const addSkill = async (IDS, page, edit) => {

    await handleButton(IDS.addCmdBtn, page);

    await handleType(IDS.skillName, 'Sharepoint', page, edit = false);

    await handleEnter(IDS.department, 'IT', page);

    // Toggle
    // await handelButton(IDS.skillToggle, page);

    await handleButton(IDS.save, page);
}

const updateSkill = async (IDS, page, edit) => {

    // await handleButton(IDS.options, page);

    await handleButton(IDS.edit, page);

    await handleType(IDS.skillName, 'Sharepoint edit', page, edit = true);

    await handleEnter(IDS.department, 's', page);

    // Toggle
    // await handelButton(IDS.skillToggle, page);P

    await handleButton(IDS.save, page);
}

const validateEmpty = async (IDS, page) => {

    await handleButton(IDS.addCmdBtn, page);

    await setTimeout(1000);

    await handleButton(IDS.save, page);
}

const validateUpdate = async(IDS, page, edit) => {

    await handleButton(IDS.edit, page);

    await backSpace(IDS.skillName, page);

    await waitForSeconds(1);

    await handleButton(IDS.save, page);

    await waitForSeconds(3);

    await handleType(IDS.skillName, 'Sharepoint', page, edit=false);

    await handleButton(IDS.save, page);
}