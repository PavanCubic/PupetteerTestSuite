import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import * as fs from 'fs'
import handleEnter from "../../../utils/Enter.js";
import { waitForSeconds } from "../../../utils/Time.js";

(async () => {

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);

    var edit = true;

    // const initaladdbtn = '#workbenchPageContent > div > div > div > div > div > div > div > div > div > div > div.EmptyCanvasHint.withVerticalSection > div > div > button > div > div > div > i'

    // await handleButton(initaladdbtn,page);

    // await handleButton('::-p-xpath(/html/body/div[4]/div/div/div/div[3]/div/div[3]/div[3]/section[2]/div/div/button/span/div/i)', page);

    // await handleButton('#Settings', page);

    // await handleButton('#SettingsUsersID', page);

    // await handleButton('#addCommand', page);

    // await handleButton('#adduser', page);

    var IDS = JSON.parse(fs.readFileSync('modules/settings/UserDepartment/userID.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.SettingsUserId, page);

    await waitForSeconds(2);

    // Functions to be called;
    await AddUser(IDS, page, edit);
    // await UpdateUser(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateRole(IDS, page, edit);
    // await deleteUser(IDS, page);

})();


// Add User
const AddUser = async (IDS, page) => {

    await handleButton(IDS.addCmdBtn, page);

    await handleButton(IDS.addBtn, page);

    await handleEnter(IDS.people, 'sam dough', page);

    await waitForSeconds(1);

    await handleEnter(IDS.deptDrop, 'test', page);

    await waitForSeconds(1);

    await handleEnter(IDS.role, 'approver', page);

    await waitForSeconds(1);

    await handleButton(IDS.addAuser, page);
}

// Update User
const UpdateUser = async (IDS, page) => {

    // await handleButton(IDS.options, page);

    await handleButton(IDS.editBtn, page);
    
    await waitForSeconds(3);

    await handleEnter(IDS.deptDrop, 's', page);

    await waitForSeconds(1);

    await handleEnter(IDS.role, 'recruiter', page);

    await waitForSeconds(1);

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
    
        await waitForSeconds(1);
    
        await handleEnter(IDS.deptDrop, 's', page)
    
        await waitForSeconds(1);
    
        await handleButton(IDS.addAuser, page);
    } 

    const deleteUser = async(IDS, page) => {

        await handleButton(IDS.delete, page);
        
    }