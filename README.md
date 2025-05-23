# 🍊 CitrusRules

A CLI tool to fetch curated `.mdc` rule templates for Cursor AI - helping you get better AI assistance through well-defined coding standards.

## 🚀 Quick Start

```bash
# Fetch feature development standards
npx citrusrules --feature

# Fetch TypeScript strict mode rules  
npx citrusrules --typescript-strict

# Fetch git commit message standards
npx citrusrules --git-commit

# Fetch security best practices
npx citrusrules --security
```

## 🎯 What This Does

CitrusRules fetches carefully crafted `.mdc` template files into your project's `.cursor/rules/` directory. These templates help Cursor's AI understand your coding standards, resulting in better code suggestions that follow your team's best practices.

## 📋 Available Templates

- **feature**: Feature development standards (TDD, documentation, type safety)
- **typescript-strict**: TypeScript strict mode enforcement and best practices  
- **git-commit**: Git commit message standards following conventional commits
- **security**: Security best practices preventing common vulnerabilities

## 🔧 How It Works

1. Run `npx citrusrules --<template-name>`
2. The tool fetches the template from this repository
3. Saves it to `.cursor/rules/<template-name>.mdc`
4. Cursor AI now follows those rules in your project!

## 🤝 Contributing

Want to add more rule templates? Check out the `templates/` directory and submit a PR with your well-tested, practical coding standards.

## 📝 About .mdc Rules

`.mdc` files are Cursor's way of defining AI behavior rules. They use YAML frontmatter to specify when rules apply and markdown content to define the actual standards.

## 🍋 Why "CitrusRules"?

Because good coding standards should be as refreshing as citrus fruit! 🍊🍋🍈

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