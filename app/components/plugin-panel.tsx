import { motion } from "motion/react";
import type { PanelData } from "./plugin-data";
import { PanelGraphic } from "./panel-graphics";
import { PluginItem } from "./plugin-item";

interface PluginPanelProps {
  panel: PanelData;
  index: number;
}

export function PluginPanel({ panel, index }: PluginPanelProps) {
  const className = [
    "panel",
    panel.colorClass,
    panel.darkGrid ? "dark-grid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h2 className="panel-header">
        <span>{panel.headerLeft}</span>
        <span>{panel.headerRight}</span>
      </h2>
      <PanelGraphic panelId={panel.id} />
      <div className="plugin-list">
        {panel.plugins.map((plugin, i) => (
          <PluginItem
            key={plugin.name}
            plugin={plugin}
            index={i}
            panelIndex={index}
          />
        ))}
      </div>
    </motion.article>
  );
}
