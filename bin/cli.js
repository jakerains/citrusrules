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
  .option('-d, --development-workflow', 'Fetch development-workflow.mdc template')
  .option('-e, --error-handling', 'Fetch error-handling.mdc template')
  .option('-p, --performance', 'Fetch performance.mdc template')
  .option('-s, --security', 'Fetch security.mdc template')
  .option('-a, --api-design', 'Fetch api-design.mdc template')
  .option('-c, --component-standards', 'Fetch component-standards.mdc template')
  .option('-b, --db-best-practices', 'Fetch db-best-practices.mdc template')
  .option('-o, --devops-ci-cd', 'Fetch devops-ci-cd.mdc template')
  .option('-m, --mobile-standards', 'Fetch mobile-standards.mdc template')
  .option('-t, --testing-strategy', 'Fetch testing-strategy.mdc template')
  .option('--TODO-tracking', 'Fetch TODO-tracking.mdc template')
  .option('-u, --uv-python-projects', 'Fetch uv-python-projects.mdc template');

program.parse(process.argv);
const opts = program.opts();
const flags = Object.keys(opts).filter((k) => opts[k]);

if (flags.length === 0) {
  program.help();
} else {
  await fetchAndWriteTemplates(flags);
}