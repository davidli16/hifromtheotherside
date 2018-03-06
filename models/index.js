import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.endsWith('.js'),
  )
  .forEach(file => require(`./${file}`));
