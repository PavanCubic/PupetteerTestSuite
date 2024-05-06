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

  for (let rowIndex = 3; rowIndex <= worksheet.rowCount; rowIndex++) {
    const row = worksheet.getRow(rowIndex);
    const data = {
      jobTitle: row.getCell(1).value,
      department: row.getCell(2).value,
      location: row.getCell(3).value,
      position: row.getCell(4)?.value.toString(),
      experience: row.getCell(5).value,
      priority: row.getCell(6).value,
      jobType: row.getCell(7).value,
      minBudget: row.getCell(8)?.value.toString(),
      maxBudget: row.getCell(9)?.value.toString(),
      workMode: row.getCell(10).value,
      template: row.getCell(11).value,
    };

    if (rowIndex > 3) {
      await waitForSeconds(5);

      await handleButton(IDS.createReq, page);
    }

    await waitForSeconds(2);

    await handleEnter(IDS.jobTitle, data.jobTitle, page);

    await handleEnter(IDS.department, data.department, page);

    await handleEnter(IDS.location, data.location, page);

    await handleType(IDS.positions, data.position, page, false);

    await handleEnter(IDS.experience, data.experience, page);

    await handleEnter(IDS.priority, data.priority, page);

    await handleEnter(IDS.jobType, data.jobType, page);

    await handleType(IDS.minBudget, data.minBudget, page, false);

    await handleType(IDS.maxBudget, data.maxBudget, page, false);

    await handleDrop(IDS.hiringStart, page, 0);

    await handleDrop(IDS.hiringEnd, page, 3);

    await handleEnter(IDS.workMode, data.workMode, page);

    await handleEnter(IDS.template, data.template, page);

    await waitForSeconds(2);

    await handleButton(IDS.reqNext, page);

    await handleEnter(IDS.appFormSelect, "applicant form 1", page);

    await waitForSeconds(1);

    await handleButton(IDS.applicantNext, page);

    await waitForSeconds(2);

    await handleButton(IDS.hiringSubmit, page);

    await waitForSeconds(2);

    await handleType(
      IDS.enterRemarks,
      `New Requisition ${rowIndex - 2}`,
      page,
      false
    );

    await handleButton(IDS.submit, page);

    await waitForSeconds(3);
  }
})();
