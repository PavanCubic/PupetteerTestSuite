import * as fs from "fs";
import ExcelJS from "exceljs";
import launchAndGet from "../../../launch/index.js";
import handleButton from "../../../utils/ButtonClick.js";
import { waitForSeconds } from "../../../utils/Time.js";
import handleType from "../../../utils/Type.js";
import handleUpload from "../../../utils/File.js";

(async () => {
  const globalIds = JSON.parse(fs.readFileSync("global_IDs.json", "utf-8"));

  const baseUrl =
    "https://cubiclogics365.sharepoint.com/sites/RMPuppet/_layouts/15/workbench.aspx/jobposting/8f6f1b25-f910-4e50-a393-86b374003e53";

  const page = await launchAndGet(baseUrl);

  await handleButton(globalIds.initialAddBtn, page);

  await handleButton(globalIds.rmapp, page);

  await waitForSeconds(2);

  const IDS = JSON.parse(
    fs.readFileSync("modules/Home/JobPosting/addCandidate.json", "utf-8")
  );

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile("Excels/Requisition.xlsx");

  const worksheet = workbook.getWorksheet(3);

  for (let rowIndex = 3; rowIndex <= worksheet.rowCount; rowIndex++) {
    const row = worksheet.getRow(rowIndex);
    const data = {
      filePath: row.getCell(1).value,
      name: row.getCell(2).value,
      phone: row.getCell(3).value.toString(),
      email: row.getCell(4).value,
    };

    await waitForSeconds(2);

    await handleButton(IDS.add, page);

    await waitForSeconds(0.5);

    await handleButton(IDS.addCandidate, page);

    await waitForSeconds(1);

    handleUpload(IDS.inputField, data.filePath, page);

    await handleType(IDS.candidateName, data.name, page, false);

    await handleType(IDS.phone, data.phone, page, false);

    await handleType(IDS.email, data.email, page, false);

    await handleButton(IDS.submit, page);

    await waitForSeconds(2);
  }
})();
