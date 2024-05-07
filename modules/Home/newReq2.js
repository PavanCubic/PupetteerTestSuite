import * as fs from "fs";
import launchAndGet from "../../launch/index.js";
import handleButton from "../../utils/ButtonClick.js";
import { waitForSeconds } from "../../utils/Time.js";
import handleEnter from "../../utils/Enter.js";
import handleType from "../../utils/Type.js";
import handleDrop from "../../utils/dropDown.js";

(async () => {
  const globalIds = JSON.parse(fs.readFileSync("global_IDs.json", "utf-8"));

  const baseUrl = globalIds.site;

  const page = await launchAndGet(baseUrl);

  await handleButton(globalIds.initialAddBtn, page);

  await handleButton(globalIds.rmapp, page);

  const IDS = JSON.parse(fs.readFileSync("modules/Home/newReq.json", "utf-8"));

  await handleButton(IDS.createReq, page);

  await waitForSeconds(2);

  // for (let rowIndex = 3; rowIndex <= 3; rowIndex++) {
  //   const row = worksheet.getRow(rowIndex);
  //   const data = {
  //     position: row.getCell(4).value.toString(),
  //     minBudget: row.getCell(8).value.toString(),
  //     maxBudget: row.getCell(9).value.toString(),
  //   };
  // }

  for (let i = 0; i < 5; i++) {
    if (i > 0) {
      await waitForSeconds(3);

      await handleButton(IDS.createReq, page);
    }

    await waitForSeconds(2);

    await handleDrop(IDS.jobTitle, page, i+2-1);

    await handleDrop(IDS.department, page, i);

    await handleDrop(IDS.location, page, i);

    await handleType(IDS.positions, i+5, page, false);

    await handleDrop(IDS.experience, page, i + 2 - 1);

    await handleDrop(IDS.priority, page, 1);

    await handleDrop(IDS.jobType, page, 2);

    await handleType(IDS.minBudget, "11", page, false);

    await handleType(IDS.maxBudget, "12", page, false);

    await handleDrop(IDS.hiringStart, page, 0);

    await handleDrop(IDS.hiringEnd, page, i + 2 - 1);

    await handleDrop(IDS.workMode, page, 2);

    await handleDrop(IDS.template, page, i);

    await waitForSeconds(2);

    await handleButton(IDS.reqNext, page);

    await handleDrop(IDS.appFormSelect, page, 0);

    await waitForSeconds(1);

    await handleButton(IDS.applicantNext, page);

    await waitForSeconds(1);

    if (i % 2 == 0) {
      await handleDrop(IDS.hiringProcess, page, 1);
    } else {
      await handleDrop(IDS.hiringProcess, page, 0);
    }

    await waitForSeconds(1);

    await handleButton(IDS.hiringSubmit, page);

    await waitForSeconds(2);

    await handleType(IDS.enterRemarks, `New Requisition ${i + 1}`, page, false);

    await handleButton(IDS.submit, page);

    await waitForSeconds(3);
  }

  // }
})();
