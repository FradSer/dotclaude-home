# dotclaude-home ![](https://img.shields.io/badge/deploy-cloudflare-workers-orange)

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/) [![React Router](https://img.shields.io/badge/React%20Router-7.13.2-F4425B?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-06B6D4?style=flat&logo=Tailwind-CSS&logoColor=white)](https://tailwindcss.com/)

[English](README.md) | **简体中文**

一个展示 Claude Code 插件的网站，收录了 15 个精选插件，涵盖 Git 自动化、开发工作流、React 生态工具、配置管理和效率提升。

## 可用插件

| 分类 | 插件 |
|------|------|
| **CORE** | GIT, GITFLOW, GITHUB |
| **DEV** | REFACTOR, SUPERPOWERS, SWIFTUI |
| **UI** | NEXT-DEVTOOLS, SHADCN, ACPX |
| **CONFIG** | CONFIG, OPTIMIZER, UTILS |
| **EXTRA** | CONTEXT, OFFICE, MEESEEKS |

## 快速开始

### 环境要求

- Node.js 18+
- pnpm

### 安装依赖

```bash
pnpm install
```

### 开发模式

启动支持热更新的开发服务器：

```bash
pnpm run dev
```

应用将在 `http://localhost:5173` 可访问。

### 类型检查

运行类型生成和 TypeScript 验证：

```bash
pnpm run typecheck
```

### 预览生产构建

本地预览生产构建：

```bash
pnpm run preview
```

### 构建

创建生产构建：

```bash
pnpm run build
```

## 部署

本项目使用 Wrangler 部署到 Cloudflare Workers。

```bash
pnpm run deploy
```

## 技术栈

- React Router 7（SSR 框架）
- React 19（UI 库）
- Tailwind CSS 4（样式）
- Motion（动画）
- Cloudflare Workers（边缘运行时）
- TypeScript

## 许可证

MIT
