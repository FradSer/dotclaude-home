import type { Locale } from "../types";

const zh: Locale = {
  meta: {
    title: "Frad 的 Claude Code 插件",
    description: "15 个 Claude Code 插件，涵盖 Git、开发工具、UI 和系统运维。",
  },
  hero: {
    badgeLabel: "15 个插件 -- 在 GitHub 查看仓库",
    circleLabel: "在 GitHub 查看仓库",
    license: "MIT 协议",
    subtitle: "CLAUDE CODE",
  },
  error: {
    oops: "出错了!",
    unexpected: "发生了意外错误。",
    notFound: "未找到请求的页面。",
    error: "错误",
  },
  plugins: {
    GIT: "规范化 Git 自动化与高级仓库管理。",
    GITFLOW: "GitFlow 工作流自动化，支持 feature、hotfix 和 release 分支。",
    GITHUB: "带质量门禁的 GitHub 项目操作。",
    REFACTOR: "代码简化与重构的代理和技能，在保持功能的同时提升代码质量。",
    SUPERPOWERS:
      "高级开发超能力，用于编排复杂工作流，集成 Superpower Loop。",
    SWIFTUI: "基于现代 API 最佳实践的 SwiftUI 代码审查。",
    "NEXT-DEVTOOLS": "通过 MCP 服务器集成 Next.js 开发工具。",
    SHADCN:
      "管理 shadcn 组件和项目——添加、搜索、修复、调试、样式和组合 UI。提供项目上下文、组件文档和使用示例。",
    ACPX: "acpx 知识库——用于代理间通信的无头 ACP CLI。",
    CONFIG:
      "生成 AI 助手配置，包括环境检测、TDD 选项、本地最佳实践引用和多文件同步。",
    OPTIMIZER: "根据官方最佳实践和文件模式验证并优化 Claude Code 插件。",
    UTILS: "通用实用技能，用于文档编写、写作和项目维护。",
    CONTEXT:
      "5 种获取代码上下文的方法：DeepWiki、Context7、Exa、git clone 和网页搜索+获取。",
    OFFICE:
      "办公效率技能，用于专利申请、PRD 生成、飞书文档创建和浏览器自动化。",
    MEESEEKS: "在执行前强制确保任务清晰，在退出前要求验证工作成果。",
  },
};

export default zh;
