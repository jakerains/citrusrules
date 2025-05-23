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
  .option('--feature', 'Fetch feature.mdc template')
  .option('--typescript-strict', 'Fetch typescript-strict.mdc template')
  .option('--git-commit', 'Fetch git-commit.mdc template')
  .option('--security', 'Fetch security.mdc template')
  .option('--performance', 'Fetch performance.mdc template')
  .option('--error-handling', 'Fetch error-handling.mdc template')
  .option('--all', 'Fetch all available templates');

program.parse(process.argv);
const opts = program.opts();

// Handle --all flag
if (opts.all) {
  const allTemplates = ['feature', 'typescript-strict', 'git-commit', 'security', 'performance', 'error-handling'];
  await fetchAndWriteTemplates(allTemplates);
} else {
  const flags = Object.keys(opts).filter((k) => opts[k] && k !== 'all');

  if (flags.length === 0) {
    program.help();
  } else {
    await fetchAndWriteTemplates(flags);
  }
}