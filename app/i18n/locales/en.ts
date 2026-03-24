import type { Locale } from "../types";

const en: Locale = {
  meta: {
    title: "Frad's Claude Code Plugins",
    description:
      "A collection of 15 Claude Code plugins for git, development, UI, and system operations.",
  },
  hero: {
    badgeLabel: "15 plugins -- view repository on GitHub",
    circleLabel: "View repository on GitHub",
    license: "MIT LIC.",
    subtitle: "CLAUDE CODE",
  },
  error: {
    oops: "Oops!",
    unexpected: "An unexpected error occurred.",
    notFound: "The requested page could not be found.",
    error: "Error",
  },
  plugins: {
    GIT: "Conventional Git automation and advanced repository management.",
    GITFLOW:
      "GitFlow workflow automation for feature, hotfix, and release branches.",
    GITHUB: "GitHub project operations with quality gates.",
    REFACTOR:
      "Agent and skills for code simplification and refactoring to improve code quality while preserving functionality.",
    SUPERPOWERS:
      "Advanced development superpowers for orchestrating complex workflows with Superpower Loop integration.",
    SWIFTUI: "SwiftUI code review with modern API best practices.",
    "NEXT-DEVTOOLS": "Next.js development tools integration via MCP server.",
    SHADCN:
      "Manages shadcn components and projects \u2014 adding, searching, fixing, debugging, styling, and composing UI. Provides project context, component docs, and usage examples.",
    ACPX: "Knowledge base for acpx \u2014 a headless ACP CLI for agent-to-agent communication.",
    CONFIG:
      "Generate AI assistant configurations with environment detection, TDD options, local best-practices references, and multi-file sync.",
    OPTIMIZER:
      "Validates and optimizes Claude Code plugins against official best practices and file patterns.",
    UTILS:
      "General-purpose utility skills for documentation, writing, and project maintenance.",
    CONTEXT:
      "5 methods to retrieve code context: DeepWiki, Context7, Exa, git clone, and web search+fetch.",
    OFFICE:
      "Office productivity skills for patent applications, PRD generation, Feishu document creation, and browser automation.",
    MEESEEKS:
      "Enforces task clarity before execution and requires verified work before exit.",
  },
};

export default en;
