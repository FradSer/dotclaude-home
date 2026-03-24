import { motion } from "motion/react";
import { useI18n } from "../i18n";
import type { Plugin } from "./plugin-data";

interface PluginItemProps {
  plugin: Plugin;
  index: number;
  panelIndex: number;
}

export function PluginItem({ plugin, index, panelIndex }: PluginItemProps) {
  const { t } = useI18n();
  const delay = panelIndex * 0.15 + index * 0.08;
  const desc = t.plugins[plugin.name] ?? plugin.desc;

  return (
    <motion.a
      href={plugin.href}
      target="_blank"
      rel="noopener noreferrer"
      className="plugin-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay + 0.3 }}
    >
      <div className="plugin-row">
        <span className="plugin-cmd">{plugin.cmd}</span>
        <motion.span
          className="leader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
          style={{ transformOrigin: "left" }}
        />
        <span className="plugin-name">
          {plugin.name}
          <svg
            className="link-arrow"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9L9 3M9 3H4M9 3V8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="plugin-desc">{desc}</div>
    </motion.a>
  );
}
