import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import * as fs from 'fs';
import handleType from "../../../utils/Type.js";
import handleEnter from "../../../utils/Enter.js";

(async () => {

    const globalIds = JSON.parse(fs.readFileSync('global_IDs.json', 'utf-8').trim());

    const baseUrl = globalIds.site;

    const page = await launchAndGet(baseUrl);
    
    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/UserDepartment/organisation.json', 'utf-8'));

    await handleButton(globalIds.initialAddBtn, page);
    
    await handleButton(globalIds.rmapp, page);

    await waitForSeconds(2);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.org, page);

    // Function to be called
    // await AddOrganisation(IDS, page, edit);
    // await UpdateOrganisation(IDS, page, edit)
    await DeleteOrganisation(IDS, page);

})();

const AddOrganisation = async (IDS, page, edit) => {
    await handleButton(IDS.OrgCmd, page);

    await handleType(IDS.Name, 'Cubic', page, edit=false);

    await handleType(IDS.Reg, '1047', page, edit=false);

    await handleType(IDS.PanId, 'BLXPV10', page, edit=false);

    await handleType(IDS.Phone, '9108567347', page, edit=false);

    await handleType(IDS.Email, 'someone@gmail.com', page, edit=false);

    await handleEnter(IDS.Country, 'Pakistan', page);

    await handleEnter(IDS.State, 'islam', page);

    await handleEnter(IDS.City, 'islam', page);

    await handleEnter(IDS.Address, '#47, India, Karnataka, Bengaluru - 560056', page);

    await handleButton(IDS.save, page);
}

const UpdateOrganisation  = async (IDS, page, edit) => {
    await handleButton(IDS.edit, page);

    await handleType(IDS.Name, 'Cubic2', page, edit=true);

    await handleType(IDS.Reg, '1046', page, edit=true);

    await handleType(IDS.PanId, 'BLXPV10', page, edit=true);

    await handleType(IDS.Phone, '9108567346', page, edit=true);

    await handleType(IDS.Email, 'someone2@gmail.com', page, edit=true);

    await handleEnter(IDS.Country, 'Pakistan', page);

    await handleEnter(IDS.State, 'islam', page);

    await handleEnter(IDS.City, 'islam', page);

    await handleType(IDS.Address, '#46, India, Karnataka, Bengaluru - 560056', page, edit=true);

    await handleButton(IDS.save, page);
} 

const DeleteOrganisation = async (IDS, page) => {

    await handleButton(IDS.options, page);

    await handleButton(IDS.delete, page);
    
}