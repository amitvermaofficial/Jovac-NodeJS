import { log } from "console";
import fs from "fs";

const stream = fs.createWriteStream('log2.txt');
stream.write('Line 1\n');
stream.write('Line 2\n');
stream.write('Line 3\n');
stream.write('Line 4\n');

fs.readFile('log2.txt', 'utf-8', (err, data) => {
  log(data);
})

