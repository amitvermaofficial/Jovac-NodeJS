import { log } from "console";
import fs from "fs";

const message = fs.readFileSync('sample.txt', 'utf-8');
log(message);
log('\n\nI\'ll print at end');