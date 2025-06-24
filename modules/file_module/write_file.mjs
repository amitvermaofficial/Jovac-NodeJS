import { error, log } from "console";
import fs from "fs";

const message = "Hello! I'm Amit Verma currently a third year B.Tech Student.\n After a couple of years we will become the Alumni of our College that's how I realize how fast time goes."

fs.writeFile('sample.txt', message, (err) => {
  if (err) error(err);
  log('Data written succesfully!');
});

log('I will get printed first!');