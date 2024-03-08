import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import handleType from "../../../utils/Type.js";
import { setTimeout } from "timers/promises";
import * as fs from 'fs'
import handleEnter from "../../../utils/Enter.js";

(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx'

    var edit = true;

    const page = await launchAndGet(baseUrl);

    // const initaladdbtn = '#workbenchPageContent > div > div > div > div > div > div > div > div > div > div > div.EmptyCanvasHint.withVerticalSection > div > div > button > div > div > div > i'

    // await handleButton(initaladdbtn,page);

    // await handleButton('::-p-xpath(/html/body/div[4]/div/div/div/div[3]/div/div[3]/div[3]/section[2]/div/div/button/span/div/i)', page);

    // await handleButton('#Settings', page);

    // await handleButton('#SettingsUsersID', page);

    // await handleButton('#addCommand', page);

    // await handleButton('#adduser', page);

    var IDS = JSON.parse(fs.readFileSync('modules/settings/UserDepartment/userID.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.SettingsUserId, page);

    await setTimeout(2000);

    // Functions to be called;
    await AddUser(IDS, page, edit);
    // await UpdateUser(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateRole(IDS, page, edit);

})();


// Add User
const AddUser = async (IDS, page) => {

    await handleButton(IDS.addCmdBtn, page);

    await handleButton(IDS.addBtn, page);

    await handleEnter(IDS.people, 'shan cubic', page);

    await setTimeout(1000);

    await handleEnter(IDS.deptDrop, 's', page);

    await setTimeout(1000);

    await handleEnter(IDS.role, 'recruiter', page);

    await setTimeout(1000);

    await handleButton(IDS.addAuser, page);
}

// Update User
const UpdateUser = async (IDS, page) => {

    await handleButton(IDS.options, page);

    await handleButton(IDS.editBtn, page);
    
    await setTimeout(3000);

    await handleEnter(IDS.deptDrop, 's', page);

    await setTimeout(1000);

    await handleEnter(IDS.role, 'recruiter', page);

    await setTimeout(1000);

    await handleButton(IDS.addAuser, page);
}

// Validation

    // Empty Fields
    const validateEmpty = async(IDS, page) =>{

        await handleButton(IDS.addCmdBtn, page);

        await handleButton(IDS.addBtn, page);

        await handleButton(IDS.addAuser, page);
    }

    // Empty Role
    const validateRole = async(IDS, page) => {

        await handleButton(IDS.addCmdBtn, page);

        await handleButton(IDS.addBtn, page);
    
        await handleEnter(IDS.people, 'clm vikas', page);
    
        await setTimeout(1000);
    
        await handleEnter(IDS.deptDrop, 's', page)
    
        await setTimeout(1000);
    
        await handleButton(IDS.addAuser, page);
    } 