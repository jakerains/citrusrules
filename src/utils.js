import axios from 'axios';
import fs from 'fs-extra';
import path from 'node:path';
import chalk from 'chalk';
import { TEMPLATE_URL_BASE } from './config.js';

// Show awesome citrus banner
export function showBanner() {
  const banner = `
${chalk.yellow('    🍋 ════════════════════════════════════════════════════════════════ 🍋')}
${chalk.yellow('                                                                        ')}
${chalk.yellow('         ██████╗██╗████████╗██████╗ ██╗   ██╗███████╗                 ')}
${chalk.yellow('        ██╔════╝██║╚══██╔══╝██╔══██╗██║   ██║██╔════╝                 ')}
${chalk.yellow('        ██║     ██║   ██║   ██████╔╝██║   ██║███████╗                 ')}
${chalk.yellow('        ██║     ██║   ██║   ██╔══██╗██║   ██║╚════██║                 ')}
${chalk.yellow('        ╚██████╗██║   ██║   ██║  ██║╚██████╔╝███████║                 ')}
${chalk.yellow('         ╚═════╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝                 ')}
${chalk.yellow('                                                                        ')}
${chalk.yellow('        ██████╗ ██╗   ██╗██╗     ███████╗███████╗                     ')}
${chalk.yellow('        ██╔══██╗██║   ██║██║     ██╔════╝██╔════╝                     ')}
${chalk.yellow('        ██████╔╝██║   ██║██║     █████╗  ███████╗                     ')}
${chalk.yellow('        ██╔══██╗██║   ██║██║     ██╔══╝  ╚════██║                     ')}
${chalk.yellow('        ██║  ██║╚██████╔╝███████╗███████╗███████║                     ')}
${chalk.yellow('        ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝                     ')}
${chalk.yellow('                                                                        ')}
${chalk.yellow('    🍋 ════════════════════════════════════════════════════════════════ 🍋')}
`;

  console.log(banner);
  console.log(chalk.cyan('    🚀 Fresh Cursor AI rules, straight from the citrus grove! 🌿\n'));
}

// Show success message with template count
export function showSuccess(flags) {
  const templateCount = flags.length;
  const plural = templateCount === 1 ? 'template' : 'templates';
  
  console.log(chalk.green(`\n✨ Successfully installed ${templateCount} ${plural}:`));
  
  flags.forEach(flag => {
    const templateName = getTemplateFilename(flag);
    console.log(chalk.green(`   🍃 ${templateName}.mdc`));
  });
  
  console.log(chalk.cyan('\n🎯 Your .cursor/rules directory is now fresh and ready!'));
  console.log(chalk.gray('   Happy coding! 🍋✨\n'));
}

// Map camelCase option names to kebab-case filenames
export function getTemplateFilename(name) {
  const mapping = {
    'developmentWorkflow': 'development-workflow',
    'errorHandling': 'error-handling',
    'playwrightTesting': 'playwright-testing',
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

export async function fetchAndWriteTemplates(names, spinner) {
  const dest = path.resolve(process.cwd(), '.cursor/rules');
  await fs.ensureDir(dest);

  const successes = [];
  const errors = [];

  for (const name of names) {
    const templateName = getTemplateFilename(name);
    const filename = `${templateName}.mdc`;
    const url = `${TEMPLATE_URL_BASE}/${filename}`;
    
    // Update spinner text for current template
    spinner.text = `🍋 Fetching ${filename}...`;
    
    try {
      const res = await axios.get(url);
      await fs.writeFile(path.join(dest, filename), res.data, 'utf8');
      successes.push(filename);
    } catch (err) {
      errors.push({ filename, error: err.message });
    }
  }

  // Handle any errors that occurred
  if (errors.length > 0) {
    const errorMessage = errors.map(e => `${e.filename}: ${e.error}`).join(', ');
    throw new Error(errorMessage);
  }

  return successes;
}