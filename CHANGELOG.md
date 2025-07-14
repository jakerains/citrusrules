# Changelog

All notable changes to the CitrusRules project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.1] - 2025-07-14

### ✨ Added
- **Citrus-themed ASCII art banner** with beautiful "CITRUS RULES" logo displayed on every command
- **Enhanced CLI UX** with citrus branding and tagline "Fresh Cursor AI rules, straight from the citrus grove! 🌿"
- **Ora spinner integration** for elegant loading animations during template downloads
- **Emoji-enhanced success messages** with visual feedback showing installed templates
- **Professional CLI presentation** with colorful output and improved user experience

### 🔧 Changed
- CLI now shows banner on all commands including `--help`
- Success messages now list installed templates with leaf emojis (🍃)
- Enhanced visual feedback throughout the CLI experience

### 📦 Dependencies
- Added `ora` package for elegant loading spinners

---

## [1.8.0] - 2025-07-14

### ✨ Added
- **Comprehensive Playwright testing template** (`playwright-testing.mdc`)
- **MCP browser tools integration** with setup instructions for `.cursor/mcp.json`
- **Advanced Playwright patterns** including Page Object Models, fixtures, and visual testing
- **Agent-requested rule metadata** for automatic application when working on tests

### 🔧 Changed
- **Replaced `-p` flag** from `performance.mdc` to `playwright-testing.mdc`
- Updated CLI mapping and template configuration

### 🗑️ Removed
- `performance.mdc` template (replaced with Playwright testing)

---

## [1.7.2] - 2025-07-13

### 🔧 Changed
- Updated project documentation and version maintenance

---

## [1.7.1] - 2025-07-13

### 📚 Changed
- Updated README to reflect mobile-standards improvements

---

## [1.7.0] - 2025-07-13

### ✨ Added
- **Complete rewrite of `mobile-standards.mdc`** with comprehensive Expo SDK 52+ and React Native 2025 best practices
- Modern mobile development standards and patterns
- Up-to-date Expo and React Native guidance

### 🔧 Changed
- Enhanced mobile development template with current best practices
- Updated mobile standards for 2025 development patterns

---

## Earlier Versions

Previous versions included foundational CLI functionality, template system, and core rule templates. For detailed history, see the Git commit log.

---

## Template Roadmap

### Current Templates (12 total)
- `development-workflow.mdc` - Development workflow best practices
- `error-handling.mdc` - Error handling patterns  
- `playwright-testing.mdc` - **NEW** Playwright testing with MCP browser tools
- `security.mdc` - Security best practices
- `api-design.mdc` - API design standards
- `component-standards.mdc` - Component architecture
- `db-best-practices.mdc` - Database best practices
- `devops-ci-cd.mdc` - DevOps and CI/CD workflows
- `mobile-standards.mdc` - **ENHANCED** Expo & React Native 2025 standards
- `TODO-tracking.mdc` - TODO management system
- `testing-strategy.mdc` - Testing methodologies
- `uv-python-projects.mdc` - Python project standards with uv 