import launchAndGet from "../../../launch/index.js";
import * as fs from 'fs'
import handleButton from "../../../utils/ButtonClick.js";


(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx';

    const page = await launchAndGet(baseUrl);

    var edit = false;

    const IDS = JSON.parse(fs.readFileSync('modules/settings/JobPosting/jobTitle.json', 'utf-8'));

    await handleButton(IDS.initaladdbtn, page);

    await handleButton(IDS.rmapp, page);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.JobClick, page);

})();