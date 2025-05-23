# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

**Testing:**
```bash
npm test        # Run all tests with vitest
```

**Development:**
```bash
npm install     # Install dependencies
```

**CLI Usage:**
```bash
npx citrusrules --feature --agent    # Fetch both templates
npx citrusrules --feature            # Fetch only feature template
npx citrusrules --agent              # Fetch only agent template
```

## Architecture

This is a CLI tool that fetches `.mdc` template files from a remote GitHub repository and writes them to the local `.cursor/rules` directory.

**Core Components:**
- `bin/cli.js` - CLI entry point using Commander.js, accepts `--feature` and `--agent` flags
- `src/utils.js` - Contains `fetchAndWriteTemplates()` function that downloads templates via axios and writes to `.cursor/rules/`
- `src/config.js` - Defines `TEMPLATE_URL_BASE` pointing to the remote template repository

**Data Flow:**
1. CLI parses flags to determine which templates to fetch
2. `fetchAndWriteTemplates()` creates `.cursor/rules` directory if needed
3. For each template, fetches from `${TEMPLATE_URL_BASE}/${name}.mdc` 
4. Writes the response data to `.cursor/rules/${name}.mdc`

**Testing:**
Uses vitest with nock for HTTP mocking. Tests verify templates are fetched and written correctly to the filesystem.