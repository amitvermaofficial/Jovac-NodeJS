import { log } from "console";
import fs from "fs";

const stream = fs.createReadStream('log.txt');
stream.on('data', (chunk) => {
  log(chunk.toString());
});