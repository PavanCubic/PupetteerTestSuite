import * as fs from 'fs';
import {exec} from 'child_process'

const filePath = JSON.parse(fs.readFileSync('Files.json','utf-8').trim());

const path = filePath.newRequisition;

exec(`node ${path}`)