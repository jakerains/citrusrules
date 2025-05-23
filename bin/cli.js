#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { fetchAndWriteTemplates } from '../src/utils.js';
import { TEMPLATE_URL_BASE } from '../src/config.js';

const program = new Command();
program
  .name('citrusrules')
  .description('Fetch .mdc templates into .cursor/rules');

program
  .option('--development-workflow', 'Fetch development-workflow.mdc template')
  .option('--error-handling', 'Fetch error-handling.mdc template')
  .option('--performance', 'Fetch performance.mdc template')
  .option('--security', 'Fetch security.mdc template')
  .option('--api-design', 'Fetch api-design.mdc template')
  .option('--component-standards', 'Fetch component-standards.mdc template')
  .option('--db-best-practices', 'Fetch db-best-practices.mdc template')
  .option('--devops-ci-cd', 'Fetch devops-ci-cd.mdc template')
  .option('--mobile-standards', 'Fetch mobile-standards.mdc template')
  .option('--testing-strategy', 'Fetch testing-strategy.mdc template');

program.parse(process.argv);
const opts = program.opts();
const flags = Object.keys(opts).filter((k) => opts[k]);

if (flags.length === 0) {
  program.help();
} else {
  await fetchAndWriteTemplates(flags);
}