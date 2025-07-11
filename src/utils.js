import axios from 'axios';
import fs from 'fs-extra';
import path from 'node:path';
import chalk from 'chalk';
import { TEMPLATE_URL_BASE } from './config.js';

// Map camelCase option names to kebab-case filenames
export function getTemplateFilename(name) {
  const mapping = {
    'developmentWorkflow': 'development-workflow',
    'errorHandling': 'error-handling',
    'apiDesign': 'api-design',
    'componentStandards': 'component-standards',
    'dbBestPractices': 'db-best-practices',
    'devopsCiCd': 'devops-ci-cd',
    'mobileStandards': 'mobile-standards',
    'testingStrategy': 'testing-strategy',
    'TODOTracking': 'TODO-tracking',
    'uvPythonProjects': 'uv-python-projects'
  };
  return mapping[name] || name;
}

export async function fetchAndWriteTemplates(names) {
  const dest = path.resolve(process.cwd(), '.cursor/rules');
  await fs.ensureDir(dest);

  for (const name of names) {
    const templateName = getTemplateFilename(name);
    const filename = `${templateName}.mdc`;
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