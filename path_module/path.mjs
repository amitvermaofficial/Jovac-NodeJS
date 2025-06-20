import { log } from "console";
import path from "path";
// console.log(path.parse("C:\\users\\desktop\\w3grads\\docx\\sample.txt"));
const dir = path.format({
  dir: 'C:\\users\\desktop\\w3grads\\docx',
  base: 'sample.txt',
});

log(dir);


