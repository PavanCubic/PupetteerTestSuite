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

  let i = 1;

  const page = await launchAndGet(baseUrl);

  await handleButton(globalIds.initialAddBtn, page);

  await handleButton(globalIds.rmapp, page);

  const IDS = JSON.parse(fs.readFileSync("modules/Home/newReq.json", "utf-8"));

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile("Excels/Requisition.xlsx");

  const worksheet = workbook.getWorksheet(2);

  await handleButton(IDS.createReq, page);

  await waitForSeconds(2);

  for (let rowIndex = 3; rowIndex <= worksheet.rowCount; rowIndex++) {

    const row = worksheet.getRow(rowIndex);

    const formData = {
      requisitionForm: row.getCell(1).value,
      applicantForm: row.getCell(2).value,
      hiringProcessForm: row.getCell(3).value,
    };

    if (rowIndex > 3) {
      await waitForSeconds(3);

      await handleButton(IDS.createReq, page);
    }

    await waitForSeconds(1);

    await handleEnter(IDS.requisitionForm, formData.requisitionForm, page);

    await handleDrop(IDS.jobTitle, page, i+1);

    await handleDrop(IDS.department, page, i);

    await handleDrop(IDS.location, page, i);

    await handleType(IDS.positions, "10", page, false);

    await handleDrop(IDS.experience, page, i);

    await handleDrop(IDS.priority, page, i);

    await handleDrop(IDS.jobType, page, i);

    await handleType(IDS.minBudget, "10", page, false);

    await handleType(IDS.maxBudget, "15", page, false);

    await handleDrop(IDS.hiringStart, page, 0);

    await handleDrop(IDS.hiringEnd, page, i);

    await handleDrop(IDS.workMode, page, i);

    await handleDrop(IDS.template, page, i);

    await waitForSeconds(1);

    await handleButton(IDS.reqNext, page);

    await handleEnter(IDS.appFormSelect, formData.applicantForm, page);

    await waitForSeconds(1);

    await handleButton(IDS.applicantNext, page);

    await waitForSeconds(1);

    await handleEnter(IDS.hiringProcess, formData.hiringProcessForm, page);

    await waitForSeconds(1);

    await handleButton(IDS.hiringSubmit, page);

    await waitForSeconds(1);

    await handleType(IDS.enterRemarks, `New Requisition ${i}`, page, false);

    i++;

    if(i>3){
      i=1;
    }

    await handleButton(IDS.submit, page);

    await waitForSeconds(3);
  }

  // }
})();
