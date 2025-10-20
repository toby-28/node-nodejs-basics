import { rename, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const renameFile = async () => {
  const oldPath = path.join('files', 'wrongFilename.txt');
  const newPath = path.join('files', 'properFilename.md');

  try {
    await access(oldPath, constants.F_OK);
    await access(newPath, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await rename(oldPath, newPath);
    } else {
      throw err;
    }
  }
};

await renameFile();
