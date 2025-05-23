# CitrusRules

Fetch `.mdc` templates from GitHub into your local `.cursor/rules` folder.

## Quick Start

```bash
npx citrusrules --feature --agent
```

## Installation

```bash
npm install -g citrusrules
```

or with npx:

```bash
npx citrusrules --feature
```

## Development

```bash
npm install
npm test
```

## Publishing

1. Bump version in `package.json`.
2. Commit & tag: `git commit -am "vX.Y.Z"`; `git tag vX.Y.Z`.
3. `npm publish --access public`.