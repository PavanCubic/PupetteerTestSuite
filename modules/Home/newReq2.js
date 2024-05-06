import * as fs from "fs";
import ExcelJS from "exceljs";
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

  await waitForSeconds(2);

  const IDS = JSON.parse(fs.readFileSync("modules/Home/newReq.json", "utf-8"));

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile("Excels/Requisition.xlsx");

  const worksheet = workbook.getWorksheet(1);

  await handleButton(IDS.createReq, page);

  // for (let rowIndex = 3; rowIndex <= 3; rowIndex++) {
  //   const row = worksheet.getRow(rowIndex);
  //   const data = {
  //     position: row.getCell(4).value.toString(),
  //     minBudget: row.getCell(8).value.toString(),
  //     maxBudget: row.getCell(9).value.toString(),
  //   };
  // }

  for (let i = 0; i < 5; i++) {
    await waitForSeconds(2);

    if(i>=1){
      await page.evaluate(() => {
        location.reload(true);
      })

      await waitForSeconds(4);
      
      await handleButton(IDS.createReq, page);
    }

    await handleDrop(IDS.jobTitle, page, 1);

    await handleDrop(IDS.department, page, 1);

    await handleDrop(IDS.location, page, 3);

    await handleType(IDS.positions, "12", page, false);

    await handleDrop(IDS.experience, page, 2);

    await handleDrop(IDS.priority, page, 1);

    await handleDrop(IDS.jobType, page, 2);

    await handleType(IDS.minBudget, "11", page, false);

    await handleType(IDS.maxBudget, "12", page, false);

    await handleDrop(IDS.hiringStart, page, 0);

    await handleDrop(IDS.hiringEnd, page, 3);

    await handleDrop(IDS.workMode, page, 2);

    await handleDrop(IDS.template, page, 1);

    await waitForSeconds(2);

    await handleButton(IDS.reqNext, page);

    await handleDrop(IDS.appFormSelect, page, 0);

    await waitForSeconds(1);

    await handleButton(IDS.applicantNext, page);

    await waitForSeconds(2);

    await handleButton(IDS.hiringSubmit, page);

    await waitForSeconds(2);

    await handleType(IDS.enterRemarks, `New Requisition `, page, false);

    await handleButton(IDS.submit, page);

    await waitForSeconds(3);
  }

  // }
})();
