export interface Plugin {
  cmd: string;
  name: string;
  desc: string;
  href: string;
}

export interface PanelData {
  id: string;
  headerLeft: string;
  headerRight: string;
  colorClass: string;
  darkGrid?: boolean;
  plugins: Plugin[];
}

const gh = (name: string) =>
  `https://github.com/FradSer/dotclaude/tree/main/${name}`;

export const panels: PanelData[] = [
  {
    id: "core",
    headerLeft: "CORE",
    headerRight: "SYSTEM",
    colorClass: "p-core",
    darkGrid: true,
    plugins: [
      {
        cmd: "claude plugin install git@frad-dotclaude",
        name: "GIT",
        desc: "Conventional Git automation and advanced repository management.",
        href: gh("git"),
      },
      {
        cmd: "claude plugin install gitflow@frad-dotclaude",
        name: "GITFLOW",
        desc: "GitFlow workflow automation for feature, hotfix, and release branches.",
        href: gh("gitflow"),
      },
      {
        cmd: "claude plugin install github@frad-dotclaude",
        name: "GITHUB",
        desc: "GitHub project operations with quality gates.",
        href: gh("github"),
      },
    ],
  },
  {
    id: "dev",
    headerLeft: "DEV",
    headerRight: "TOOLS",
    colorClass: "p-dev",
    plugins: [
      {
        cmd: "claude plugin install refactor@frad-dotclaude",
        name: "REFACTOR",
        desc: "Agent and skills for code simplification and refactoring to improve code quality while preserving functionality.",
        href: gh("refactor"),
      },
      {
        cmd: "claude plugin install superpowers@frad-dotclaude",
        name: "SUPERPOWERS",
        desc: "Advanced development superpowers for orchestrating complex workflows with Superpower Loop integration.",
        href: gh("superpowers"),
      },
      {
        cmd: "claude plugin install swiftui@frad-dotclaude",
        name: "SWIFTUI",
        desc: "SwiftUI code review with modern API best practices.",
        href: gh("swiftui"),
      },
    ],
  },
  {
    id: "ui",
    headerLeft: "REACT",
    headerRight: "ECO",
    colorClass: "p-ui",
    darkGrid: true,
    plugins: [
      {
        cmd: "claude plugin install next-devtools@frad-dotclaude",
        name: "NEXT-DEVTOOLS",
        desc: "Next.js development tools integration via MCP server.",
        href: gh("next-devtools"),
      },
      {
        cmd: "claude plugin install shadcn@frad-dotclaude",
        name: "SHADCN",
        desc: "Manages shadcn components and projects \u2014 adding, searching, fixing, debugging, styling, and composing UI. Provides project context, component docs, and usage examples.",
        href: gh("shadcn"),
      },
      {
        cmd: "claude plugin install acpx@frad-dotclaude",
        name: "ACPX",
        desc: "Knowledge base for acpx \u2014 a headless ACP CLI for agent-to-agent communication.",
        href: gh("acpx"),
      },
    ],
  },
  {
    id: "config",
    headerLeft: "CONFIG",
    headerRight: "OPS",
    colorClass: "p-sys",
    plugins: [
      {
        cmd: "claude plugin install claude-config@frad-dotclaude",
        name: "CONFIG",
        desc: "Generate AI assistant configurations with environment detection, TDD options, local best-practices references, and multi-file sync.",
        href: gh("claude-config"),
      },
      {
        cmd: "claude plugin install plugin-optimizer@frad-dotclaude",
        name: "OPTIMIZER",
        desc: "Validates and optimizes Claude Code plugins against official best practices and file patterns.",
        href: gh("plugin-optimizer"),
      },
      {
        cmd: "claude plugin install utils@frad-dotclaude",
        name: "UTILS",
        desc: "General-purpose utility skills for documentation, writing, and project maintenance.",
        href: gh("utils"),
      },
    ],
  },
  {
    id: "extra",
    headerLeft: "EXTRA",
    headerRight: "SKILLS",
    colorClass: "p-extra",
    plugins: [
      {
        cmd: "claude plugin install code-context@frad-dotclaude",
        name: "CONTEXT",
        desc: "5 methods to retrieve code context: DeepWiki, Context7, Exa, git clone, and web search+fetch.",
        href: gh("code-context"),
      },
      {
        cmd: "claude plugin install office@frad-dotclaude",
        name: "OFFICE",
        desc: "Office productivity skills for patent applications, PRD generation, Feishu document creation, and browser automation.",
        href: gh("office"),
      },
      {
        cmd: "claude plugin install meeseeks-vetted@frad-dotclaude",
        name: "MEESEEKS",
        desc: "Enforces task clarity before execution and requires verified work before exit.",
        href: gh("meeseeks-vetted"),
      },
    ],
  },
];
