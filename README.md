<div align="center">

# 🍊 CitrusRules

### *Supercharge your Cursor AI with curated coding standards*

[![npm version](https://img.shields.io/npm/v/citrusrules.svg)](https://www.npmjs.com/package/citrusrules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/citrusrules.svg)](https://www.npmjs.com/package/citrusrules)
[![GitHub stars](https://img.shields.io/github/stars/jakerains/citrusrules.svg?style=social&label=Star)](https://github.com/jakerains/citrusrules)

**Transform your AI coding assistant with battle-tested `.mdc` rule templates**

[🚀 Quick Start](#-quick-start) • [📋 Templates](#-available-templates) • [🎯 Examples](#-examples) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 What is CitrusRules?

CitrusRules is a CLI tool that instantly downloads **professional coding standards** for your Cursor AI assistant. Instead of generic suggestions, get AI-powered code that follows your team's best practices for TypeScript, security, git commits, and more.

### ✨ Key Benefits

- 🧠 **Smarter AI**: Train Cursor with proven coding standards
- ⚡ **Instant Setup**: One command to download professional rules
- 🔒 **Battle-Tested**: Templates used by real development teams
- 🎨 **Customizable**: Easy to modify for your specific needs
- 🌟 **Zero Config**: Works out of the box

### 🆕 Latest Updates (v1.3.0)

- ⚡ **Short Flags**: Use `-d` instead of `--development-workflow` for lightning-fast commands
- 🧹 **Clean Package**: Only the latest working version available (no legacy confusion)
- 🚀 **Enhanced CLI**: Improved help output and better error messages
- 📦 **Lightweight**: Streamlined package with just the essentials

## 🚀 Quick Start

```bash
# 📊 Advanced development workflow with task tracking
npx citrusrules --development-workflow
# or use the short flag:
npx citrusrules -d

# 🛡️ Comprehensive error handling patterns
npx citrusrules --error-handling
# or: npx citrusrules -e

# ⚡ Performance optimization standards
npx citrusrules --performance
# or: npx citrusrules -p

# 🔒 Security best practices
npx citrusrules --security
# or: npx citrusrules -s

# 🌐 API design guidelines
npx citrusrules --api-design
# or: npx citrusrules -a

# 🎨 Component development standards
npx citrusrules --component-standards
# or: npx citrusrules -c
```

### 🚀 All Available Commands

| Short | Long | Description |
|-------|------|-------------|
| `-d` | `--development-workflow` | 📊 Comprehensive development workflow with task tracking |
| `-e` | `--error-handling` | 🛡️ Robust error handling patterns and recovery |
| `-p` | `--performance` | ⚡ Performance optimization standards |
| `-s` | `--security` | 🔒 Security best practices and vulnerability prevention |
| `-a` | `--api-design` | 🌐 RESTful API design guidelines |
| `-c` | `--component-standards` | 🎨 React/Vue component development standards |
| `-b` | `--db-best-practices` | 🗄️ Database query and schema best practices |
| `-o` | `--devops-ci-cd` | 🔧 DevOps and CI/CD pipeline standards |
| `-m` | `--mobile-standards` | 📱 Mobile development best practices |
| `-t` | `--testing-strategy` | 🧪 Comprehensive testing methodologies |

## 📋 Available Templates

### 🏆 Core Development Templates
| Template | Description | Best For |
|----------|-------------|----------|
| 📊 **development-workflow** | Comprehensive development workflow with task tracking | Research, planning, progress tracking |
| 🛡️ **error-handling** | Robust error handling patterns and recovery | Custom errors, async safety, fault tolerance |
| ⚡ **performance** | Performance optimization standards | Algorithm efficiency, React optimization, monitoring |

### 🔒 Security & Quality Templates  
| Template | Description | Best For |
|----------|-------------|----------|
| 🔒 **security** | Security best practices and vulnerability prevention | XSS protection, input validation, secure coding |
| 🧪 **testing-strategy** | Comprehensive testing methodologies | Unit testing, integration testing, TDD practices |

### 🎨 Architecture & Design Templates
| Template | Description | Best For |
|----------|-------------|----------|
| 🌐 **api-design** | RESTful API design guidelines | Endpoint design, HTTP standards, documentation |
| 🎨 **component-standards** | React/Vue component development standards | Component architecture, props design, lifecycle |
| 🗄️ **db-best-practices** | Database query and schema best practices | Query optimization, indexing, data modeling |

### 🚀 DevOps & Mobile Templates
| Template | Description | Best For |
|----------|-------------|----------|
| 🔧 **devops-ci-cd** | DevOps and CI/CD pipeline standards | Deployment, automation, infrastructure as code |
| 📱 **mobile-standards** | Mobile development best practices | Performance, UX patterns, platform guidelines |

## 🎯 Examples

### Before CitrusRules ❌
```typescript
// Generic AI suggestions
function getUser(id) {
  return fetch('/api/users/' + id).then(r => r.json());
}
```

### After CitrusRules ✅
```typescript
// AI suggestions following your standards
export async function getUser(id: string): Promise<User | null> {
  if (!id?.trim()) {
    throw new ValidationError('User ID is required');
  }
  
  try {
    const response = await fetch(`/api/users/${encodeURIComponent(id)}`);
    
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new ApiError(`Failed to fetch user: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    logger.error('Error fetching user', { id, error });
    throw error;
  }
}
```

## 🔧 How It Works

1. **📥 Fetch**: Downloads curated `.mdc` rule templates from GitHub
2. **📁 Save**: Places them in your project's `.cursor/rules/` directory  
3. **🧠 Train**: Cursor AI learns your coding standards automatically
4. **✨ Code**: Get suggestions that follow your rules instantly!

```bash
# ⚡ Example workflow (using short flags!)
npx citrusrules -e
# → Downloads error-handling.mdc to .cursor/rules/
# → Cursor now suggests robust error handling patterns!

# 🚀 Quick combo for full-stack development:
npx citrusrules -d -e -p -a -c
# → Comprehensive development standards in seconds!
```

## 💡 Why CitrusRules?

### 🎨 **Consistent Code Quality**
No more inconsistent AI suggestions. Get code that follows industry best practices every time.

### 🚀 **Faster Development** 
Stop explaining the same coding standards over and over. Let AI remember your preferences.

### 🛡️ **Enterprise-Grade Standards**
Built-in templates for error handling, performance optimization, and feature development workflows.

### 📚 **Learn Best Practices**
Each template includes examples and explanations to improve your team's coding skills.

## 🎮 Interactive Demo

```bash
# Try it now! (creates a test directory)
mkdir my-awesome-project && cd my-awesome-project

# ⚡ Get the core development templates (using short flags!)
npx citrusrules -d -e -p

# 🔒 Add security and testing standards
npx citrusrules -s -t

# 🎨 Include architecture templates
npx citrusrules -a -c -b

# 🚀 Or get everything at once:
npx citrusrules -d -e -p -s -a -c -b -o -m -t

ls .cursor/rules/
# → development-workflow.mdc  error-handling.mdc  performance.mdc  security.mdc  testing-strategy.mdc  api-design.mdc  component-standards.mdc  db-best-practices.mdc  devops-ci-cd.mdc  mobile-standards.mdc

# Now open this project in Cursor and see the magic! ✨
```

## 📦 Usage

### Option 1: NPX (Recommended) ⚡
```bash
# Use short flags for quick access:
npx citrusrules -d    # development workflow
npx citrusrules -e    # error handling
npx citrusrules -p    # performance

# Or combine multiple:
npx citrusrules -d -e -p -s

# See all options:
npx citrusrules --help
```

### Option 2: Global Install 🌍
```bash
npm install -g citrusrules
citrusrules -p -s     # performance + security
```

### Option 3: Project Development 📁
```bash
npm install --save-dev citrusrules
npx citrusrules -e -t  # error handling + testing
```

> **✨ Latest Version**: We maintain only the latest version (1.3.0) on npm for the cleanest experience. No legacy issues or confusing old versions!

## 🤝 Contributing

We'd love your help making CitrusRules even better! 

### 🌟 Ways to Contribute

- **🐛 Report Bugs**: Found an issue? [Open an issue](https://github.com/jakerains/citrusrules/issues)
- **💡 Suggest Features**: Have ideas? We want to hear them!
- **📝 Add Templates**: Share your coding standards with the community
- **📖 Improve Docs**: Help make our documentation clearer

### 🔧 Development Setup

```bash
git clone https://github.com/jakerains/citrusrules.git
cd citrusrules
npm install
npm test

# Test your changes
node bin/cli.js --help
```

### 📝 Creating New Templates

1. Add your `.mdc` file to `templates/`
2. Update `bin/cli.js` with the new option
3. Test thoroughly
4. Submit a PR with examples!

## 📚 Template Format

All templates follow this structure:

```yaml
---
description: Brief description of what this rule does
globs: ["**/*.ts", "**/*.js"]  # File patterns to apply to
alwaysApply: false              # Whether to apply everywhere
---

# Your Rule Title

## Your coding standards here...

### Examples
```typescript
// Good examples
```

### Anti-patterns
```typescript
// What NOT to do
```
```

## 🗺️ Roadmap

### ✅ Recently Completed
- [x] ⚡ **Short Flag Support**: Single-character flags for all commands (-d, -e, -p, etc.)
- [x] 🧹 **Package Cleanup**: Removed legacy versions for cleaner user experience
- [x] 🎨 React/Vue component standards
- [x] 🗄️ Database query best practices  
- [x] 🧪 Testing strategy templates
- [x] 🌐 API design guidelines
- [x] 📱 Mobile development standards
- [x] 🔧 DevOps and CI/CD rules
- [x] 🔒 Enhanced security templates

### 🔮 Future Enhancements
- [ ] 🤖 AI/ML development standards
- [ ] ⚙️ Microservices architecture patterns
- [ ] 🎯 Accessibility (a11y) guidelines
- [ ] 🌍 Internationalization (i18n) best practices
- [ ] 📊 Analytics and monitoring templates
- [ ] 🎨 Design system integration standards

## ❓ FAQ

<details>
<summary><strong>Q: Can I use both short and long flags?</strong></summary>
<br>
A: Yes! Use `-d` for quick commands or `--development-workflow` if you prefer explicit names. Both work identically.
</details>

<details>
<summary><strong>Q: Will this slow down Cursor?</strong></summary>
<br>
A: No! .mdc rules are lightweight and actually help Cursor give better suggestions faster.
</details>

<details>
<summary><strong>Q: Can I modify the templates?</strong></summary>
<br>
A: Absolutely! Edit the .mdc files in .cursor/rules/ to match your team's specific standards.
</details>

<details>
<summary><strong>Q: Do these work with other AI coding assistants?</strong></summary>
<br>
A: Currently designed for Cursor, but the principles can be adapted to other tools.
</details>

## 🍋 Why "CitrusRules"?

Because good coding standards should be as **refreshing** as citrus fruit! 🍊🍋🍈

Plus, we believe in keeping development **zesty** and **energizing** – not boring and bureaucratic.

## 📄 License

MIT © [jakerains](https://github.com/jakerains)

---

<div align="center">

**Made with 🧡 for the developer community**

[⭐ Star us on GitHub](https://github.com/jakerains/citrusrules) • [🐛 Report Issues](https://github.com/jakerains/citrusrules/issues) • [💬 Discussions](https://github.com/jakerains/citrusrules/discussions)

</div>