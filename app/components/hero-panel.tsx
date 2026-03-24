import { motion } from "motion/react";

const REPO_URL = "https://github.com/FradSer/dotclaude";

export function HeroPanel() {
  return (
    <motion.article
      className="panel p-hero"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <div className="hero-top">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FRAD'S
            <br />
            PLUGINS
          </motion.h1>
          <motion.a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.4,
            }}
          >
            15
          </motion.a>
        </div>

        <div className="hero-circle-container">
          <motion.a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-giant-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.3,
            }}
          />
        </div>

        <div className="hero-footer">
          <div className="hero-meta">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              MIT LIC.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              EN / FR
            </motion.span>
          </div>
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            CLAUDE CODE
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
