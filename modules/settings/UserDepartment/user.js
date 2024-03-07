import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import { setTimeout } from "timers/promises";
import * as fs from 'fs'

(async () => {

    const baseUrl = 'https://cubicdirect.sharepoint.com/sites/pavan/_layouts/15/workbench.aspx'

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

    await handleButton(IDS.rmapp ,page);

    await handleButton(IDS.Settings, page);

    await handleButton(IDS.SettingsUserId, page);

    await setTimeout(1000);

    await handleButton(IDS.addCmdBtn, page);

    await handleButton(IDS.addBtn, page);

})();
