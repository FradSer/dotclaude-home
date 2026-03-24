import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Lang, Locale } from "./types";
import en from "./locales/en";
import zh from "./locales/zh";

const locales: Record<Lang, Locale> = { en, zh };

interface I18nContextValue {
  lang: Lang;
  t: Locale;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
  toggleLang: () => {},
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "zh") return stored;
  const browserLang = navigator.language;
  if (browserLang.startsWith("zh")) return "zh";
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLangState(detectLang());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "en" ? "zh" : "en")),
    [],
  );

  return (
    <I18nContext.Provider value={{ lang, t: locales[lang], setLang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
