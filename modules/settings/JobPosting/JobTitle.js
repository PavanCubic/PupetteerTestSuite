import launchAndGet from "../../../launch/index.js";
import * as fs from 'fs'
import handleButton from "../../../utils/ButtonClick.js";
import handleType from "../../../utils/Type.js";
import backSpace from "../../../utils/Back.js";
import { waitForSeconds } from "../../../utils/Time.js";


(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx';

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/JobPosting/jobTitle.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.JobClick, page);

    await waitForSeconds(2);

    // Functions
    // await addJobTitle(IDS, page, edit);
    // await editJobTitle(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateTitle(IDS, page, edit);
    await validateOnUpdate(IDS, page, edit);

})();

const addJobTitle = async (IDS, page, edit) => {

    await handleButton(IDS.addJobTitle, page);

    await handleType(IDS.jobTitleName, 'QA - 1', page, edit = false);

    await handleType(IDS.jobTitleRemarks, 'Nothing Much', page, edit = false);

    // Toggle options
    // await handleButton(IDS.jobTitleToggle, page);

    await handleButton(IDS.jobTitleSave, page);

}

const editJobTitle = async(IDS, page, edit) => {

    // await handleButton(IDS.options, page);

    await handleButton(IDS.edit, page);

    await handleType(IDS.jobTitleName, 'Sales force test', page, edit=true);

    await handleType(IDS.jobTitleRemarks, 'test edit', page, edit=true);

    // Toggle options
    // await handleButton(IDS.jobTitleToggle, page);

    await handleButton(IDS.jobTitleSave, page);
    
}

const validateEmpty = async(IDS, page) => {

    await handleButton(IDS.addJobTitle, page);

    await handleButton(IDS.jobTitleSave, page);
}

const validateTitle = async(IDS, page, edit) => {

    await handleButton(IDS.addJobTitle, page);

    await handleType(IDS.jobTitleRemarks, 'Something test', page, edit = false);

    await handleButton(IDS.jobTitleSave, page);

}

const validateOnUpdate = async(IDS, page, edit) => {

    await handleButton(IDS.edit, page);

    await backSpace(IDS.jobTitleName, page);

    await handleButton(IDS.jobTitleSave, page);

    await waitForSeconds(3);

    await handleType(IDS.jobTitleName, 'Test Again', page, edit=false);

    await handleButton(IDS.jobTitleSave, page);

}