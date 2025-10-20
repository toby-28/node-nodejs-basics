import { readdir, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const list = async () => {
  const dirPath = path.join('files');

  try {
    await access(dirPath, constants.F_OK);
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
