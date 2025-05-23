<div align="center">

# 🍊 CitrusRules

### *Supercharge your Cursor AI with curated coding standards*

[![npm version](https://badge.fury.io/js/citrusrules.svg)](https://www.npmjs.com/package/citrusrules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/citrusrules.svg)](https://www.npmjs.com/package/citrusrules)
[![GitHub stars](https://img.shields.io/github/stars/jakerains/citrusrules.svg?style=social&label=Star)](https://github.com/jakerains/citrusrules)

**Transform your AI coding assistant with battle-tested `.mdc` rule templates**

[🚀 Quick Start](#-quick-start) • [📋 Templates](#-available-templates) • [🎯 Examples](#-examples) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 What is CitrusRules?

CitrusRules is a CLI tool that instantly adds **professional coding standards** to your Cursor AI assistant. Instead of generic suggestions, get AI-powered code that follows your team's best practices for TypeScript, security, git commits, and more.

### ✨ Key Benefits

- 🧠 **Smarter AI**: Train Cursor with proven coding standards
- ⚡ **Instant Setup**: One command to add professional rules
- 🔒 **Battle-Tested**: Templates used by real development teams
- 🎨 **Customizable**: Easy to modify for your specific needs
- 🌟 **Zero Config**: Works out of the box

## 🚀 Quick Start

```bash
# 🎉 One command to supercharge your AI
npx citrusrules --feature

# 🛡️ Add security-first coding standards
npx citrusrules --security

# 📝 Get perfect git commit messages
npx citrusrules --git-commit

# 🎯 Enforce TypeScript best practices
npx citrusrules --typescript-strict
```

## 📋 Available Templates

| Template | Description | Best For |
|----------|-------------|----------|
| 🚀 **feature** | Complete feature development standards | TDD, documentation, error handling |
| 🛡️ **security** | Security-first coding practices | Preventing XSS, injection, data leaks |
| 📝 **git-commit** | Conventional commit standards | Clean git history, automated changelogs |
| 🎯 **typescript-strict** | Strict TypeScript enforcement | Type safety, code quality |

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

1. **📥 Fetch**: Downloads curated `.mdc` rule templates
2. **📁 Save**: Places them in `.cursor/rules/` directory  
3. **🧠 Train**: Cursor AI learns your coding standards
4. **✨ Code**: Get suggestions that follow your rules!

```bash
# Example workflow
npx citrusrules --security
# → Downloads security.mdc to .cursor/rules/
# → Cursor now suggests secure coding patterns!
```

## 💡 Why CitrusRules?

### 🎨 **Consistent Code Quality**
No more inconsistent AI suggestions. Get code that follows industry best practices every time.

### 🚀 **Faster Development** 
Stop explaining the same coding standards over and over. Let AI remember your preferences.

### 🛡️ **Security by Default**
Built-in security templates help prevent common vulnerabilities like XSS and injection attacks.

### 📚 **Learn Best Practices**
Each template includes examples and explanations to improve your team's coding skills.

## 🎮 Interactive Demo

```bash
# Try it now! (creates a test directory)
mkdir my-awesome-project && cd my-awesome-project
npx citrusrules --feature --security --git-commit
ls .cursor/rules/
# → feature.mdc  security.mdc  git-commit.mdc

# Now open this project in Cursor and see the magic! ✨
```

## 📦 Installation

### Option 1: NPX (Recommended)
```bash
npx citrusrules --help
```

### Option 2: Global Install
```bash
npm install -g citrusrules
citrusrules --typescript-strict
```

### Option 3: Local Project
```bash
npm install --save-dev citrusrules
npx citrusrules --security
```

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

- [ ] 🎨 React/Vue component standards
- [ ] 🗄️ Database query best practices  
- [ ] 🧪 Testing strategy templates
- [ ] 🌐 API design guidelines
- [ ] 📱 Mobile development standards
- [ ] 🔧 DevOps and CI/CD rules

## ❓ FAQ

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