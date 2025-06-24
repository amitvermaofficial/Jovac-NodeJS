import { error, log } from "console";
import fs from "fs";

fs.readFile('output.txt', 'utf8', (err, data) => {
  if (err) error(err);
  log(data);
})