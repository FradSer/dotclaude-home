import type { Route } from "./+types/home";
import { PosterBoard } from "../components/poster-board";

export function meta({}: Route.MetaArgs) {
  const title = "Frad's Claude Code Plugins";
  const description =
    "A collection of 15 Claude Code plugins for git, development, UI, and system operations.";

  return [
    { title },
    { name: "description", content: description },
    { name: "theme-color", content: "#111111" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export default function Home() {
  return <PosterBoard />;
}
