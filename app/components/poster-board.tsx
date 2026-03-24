import { HeroPanel } from "./hero-panel";
import { PluginPanel } from "./plugin-panel";
import { panels } from "./plugin-data";

export function PosterBoard() {
  return (
    <main className="poster-board">
      <HeroPanel />
      {panels.map((panel, index) => (
        <PluginPanel key={panel.id} panel={panel} index={index + 1} />
      ))}
    </main>
  );
}
