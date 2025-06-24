import { log } from "console";
import path from "path";
import url from "url";

// In ES6 __dirname can't be accesed directly for Security purpose.
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
log(__dirname);