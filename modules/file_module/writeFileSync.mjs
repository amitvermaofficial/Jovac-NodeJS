import { log } from "console";
import fs from "fs";

fs.writeFileSync('greet.txt', 'Good Night!', 'utf-8');

log('message written successfully\n\n');

log('I will print in the last');