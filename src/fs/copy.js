import { access, cp } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const copy = async () => {
  const source = path.join('files');
  const destination = path.join('files_copy');

  try {
    await access(source, constants.F_OK);
    await access(destination, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await cp(source, destination, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
