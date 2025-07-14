#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { fetchAndWriteTemplates, showBanner, showSuccess } from '../src/utils.js';

const program = new Command();

// Show awesome banner
showBanner();

program
  .name('citrusrules')
  .description('🍋 Fetch .mdc templates into .cursor/rules')
  .version('1.8.1');

program
  .option('-d, --development-workflow', 'Fetch development-workflow.mdc template')
  .option('-e, --error-handling', 'Fetch error-handling.mdc template')
  .option('-p, --playwright-testing', 'Fetch playwright-testing.mdc template')
  .option('-s, --security', 'Fetch security.mdc template')
  .option('-a, --api-design', 'Fetch api-design.mdc template')
  .option('-c, --component-standards', 'Fetch component-standards.mdc template')
  .option('-b, --db-best-practices', 'Fetch db-best-practices.mdc template')
  .option('-o, --devops-ci-cd', 'Fetch devops-ci-cd.mdc template')
  .option('-m, --mobile-standards', 'Fetch mobile-standards.mdc template')
  .option('-t, --TODO-tracking', 'Fetch TODO-tracking.mdc template')
  .option('-r, --testing-strategy', 'Fetch testing-strategy.mdc template')
  .option('-u, --uv-python-projects', 'Fetch uv-python-projects.mdc template');

program.parse(process.argv);
const opts = program.opts();
const flags = Object.keys(opts).filter((k) => opts[k]);

if (flags.length === 0) {
  console.log(chalk.yellow('\n🤔 No templates selected. Here are your options:\n'));
  program.help();
} else {
  const spinner = ora({
    text: 'Fetching fresh templates from the citrus grove...',
    color: 'yellow',
    spinner: 'dots'
  }).start();

  try {
    await fetchAndWriteTemplates(flags, spinner);
    spinner.succeed(chalk.green('🎉 Templates successfully installed!'));
    showSuccess(flags);
  } catch (error) {
    spinner.fail(chalk.red('❌ Failed to fetch templates'));
    console.error(chalk.red(`Error: ${error.message}`));
    process.exit(1);
  }
}