import { motion } from "motion/react";
import { useI18n } from "../i18n";

const REPO_URL = "https://github.com/FradSer/dotclaude";

export function HeroPanel() {
  const { lang, t, toggleLang } = useI18n();

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
            aria-label={t.hero.badgeLabel}
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
            aria-label={t.hero.circleLabel}
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
              {t.hero.license}
            </motion.span>
            <motion.button
              className="lang-switch"
              onClick={toggleLang}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              aria-label={lang === "en" ? "Switch to Chinese" : "Switch to English"}
            >
              {lang === "en" ? "EN" : "ZH"}
            </motion.button>
          </div>
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t.hero.subtitle}
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
