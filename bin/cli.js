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
  .option('--feature-tracker', 'Fetch feature-tracker.mdc template')
  .option('--error-handling', 'Fetch error-handling.mdc template')
  .option('--performance', 'Fetch performance.mdc template');

program.parse(process.argv);
const opts = program.opts();
const flags = Object.keys(opts).filter((k) => opts[k]);

if (flags.length === 0) {
  program.help();
} else {
  await fetchAndWriteTemplates(flags);
}