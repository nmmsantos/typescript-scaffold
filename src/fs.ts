import { readdir } from 'fs';
import { promisify } from 'util';

const readdirPromise = promisify(readdir);

export { readdirPromise as readdir };
