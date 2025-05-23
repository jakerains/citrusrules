import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { TEMPLATE_URL_BASE } from './config.js';

export async function fetchAndWriteTemplates(names) {
  const dest = path.resolve(process.cwd(), '.cursor/rules');
  await fs.ensureDir(dest);

  for (const name of names) {
    const filename = `${name}.mdc`;
    const url = `${TEMPLATE_URL_BASE}/${filename}`;
    try {
      const res = await axios.get(url);
      await fs.writeFile(path.join(dest, filename), res.data, 'utf8');
      console.log(chalk.green(`✔ fetched ${filename}`));
    } catch (err) {
      console.error(chalk.red(`✖ failed ${filename}: ${err.message}`));
    }
  }
}