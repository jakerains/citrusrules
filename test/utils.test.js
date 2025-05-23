import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import nock from 'nock';
import fs from 'fs-extra';
import path from 'path';
import { fetchAndWriteTemplates } from '../src/utils.js';
import { TEMPLATE_URL_BASE } from '../src/config.js';

describe('fetchAndWriteTemplates', () => {
  const tmp = path.join(process.cwd(), 'test-output');
  const cwd = process.cwd();

  beforeEach(async () => {
    await fs.remove(tmp);
    await fs.ensureDir(tmp);
  });
  afterEach(async () => {
    await fs.remove(tmp);
    process.chdir(cwd);
    nock.cleanAll();
  });

  it('fetches and writes multiple templates', async () => {
    const names = ['feature', 'agent'];
    const base = new URL(TEMPLATE_URL_BASE);
    for (const name of names) {
      nock(base.origin)
        .get(`${base.pathname}/${name}.mdc`)
        .reply(200, `${name} content`);
    }

    process.chdir(tmp);
    await fetchAndWriteTemplates(names);

    for (const name of names) {
      const file = path.join(tmp, '.cursor/rules', `${name}.mdc`);
      expect(await fs.readFile(file, 'utf8')).toBe(`${name} content`);
    }
  });
});