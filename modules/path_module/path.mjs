import { log } from "console";
import path from "path";
// console.log(path.parse("C:\\users\\desktop\\w3grads\\docx\\sample.txt"));
const dir = path.format({
  dir: 'C:\\users\\desktop\\w3grads\\docx',
  base: 'sample.txt',
});

log(dir);


// joins path segments into a single normalised path.
log(path.join('folder', 'file.txt')); // -> '/folder/file.txt'

// Resolves to an absolute path based on the current working directory.
log(path.resolve('folder', 'file.txt'));  // -> '/current/dir/folder/file.txt'

// Return the file name from a full path.
log(path.basename('/home/user/file.txt')); // -> 'file.txt'

// Returns the directory name of the path
log(path.dirname('/home/user/file.txt')); // -> '/home/user'

// Returns the file extension
log(path.extname('cargo.rs')); // -> '.rs'

