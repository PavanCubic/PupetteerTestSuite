import { setTimeout } from "timers/promises";
import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import handleType from "../../../utils/Type.js";
import * as fs from 'fs'
import { waitForSeconds } from "../../../utils/Time.js";
import backSpace from "../../../utils/Back.js";

(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx';

    var edit = true;

    const page = await launchAndGet(baseUrl);

    const IDS = JSON.parse(fs.readFileSync('modules/settings/UserDepartment/departmentsID.json','utf-8'));

    await handleButton(IDS.initialAddBtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.settingsIcon, page);

    await waitForSeconds(2);

    await handleButton(IDS.deptClick, page);

    // Call the function to be tested
    // await AddDepartment(IDS, page, edit);
    // await UpdateDepartment(IDS, page, edit);
    // await validateEmpty(IDS, page);
    // await validateDept(IDS, page, edit);
    // await validateExisting(IDS, page, edit);
    await validateOnUpdate(IDS, page, edit);

})();


//Add Department
const AddDepartment = async (IDS, page, edit) => {
    await handleButton(IDS.addDeptClick, page);

    await handleType(IDS.deptType, 'spor Sports', page, edit = false);

    await handleType(IDS.deptRem, 'Nothing', page, edit = false);

    await handleButton(IDS.deptTog, page);

    await handleButton(IDS.saveClick, page);
}


// Update Department
const UpdateDepartment = async (IDS, page, edit) => {
    // await handleButton(IDS.editDeptIcon, page);

    await handleButton(IDS.editClick, page);

    await handleType(IDS.deptType, 'IT', page, edit = true);

    await handleType(IDS.deptRem, 'IT Edit', page, edit = true);

    await handleButton(IDS.saveClick, page);
}


// Validations : -

// Empty Fields

const validateEmpty = async (IDS, page) => {
    await handleButton(IDS.addDeptClick, page);
    await setTimeout(1000);
    await handleButton(IDS.saveClick, page);
}

// Empty Department

const validateDept = async (IDS, page, edit) => {
    await handleButton(IDS.addDeptClick, page);

    await handleType(IDS.deptRem, 'any', page, edit = false);

    await handleButton(IDS.saveClick, page);
}

// Existing Department

const validateExisting = async (IDS, page, edit) => {
    await handleButton(IDS.addDeptClick, page);

    await handleType(IDS.deptType, ' Sports', page, edit = false);

    await handleButton(IDS.saveClick, page);
}

const validateOnUpdate = async(IDS, page, edit) => {

    await handleButton(IDS.editClick, page);

    await backSpace(IDS.deptType, page);

    await handleButton(IDS.saveClick, page);

    await waitForSeconds(3);

    await handleType(IDS.deptType, 'Test', page, edit=false);

    await handleButton(IDS.saveClick, page);

}


