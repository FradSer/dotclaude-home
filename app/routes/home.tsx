import type { Route } from "./+types/home";
import { PosterBoard } from "../components/poster-board";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Frad's Claude Code Plugins" },
    {
      name: "description",
      content:
        "A collection of 15 Claude Code plugins for git, development, UI, and system operations.",
    },
  ];
}

export default function Home() {
  return <PosterBoard />;
}
