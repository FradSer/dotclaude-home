export type Lang = "en" | "zh";

export interface Locale {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badgeLabel: string;
    circleLabel: string;
    license: string;
    subtitle: string;
  };
  error: {
    oops: string;
    unexpected: string;
    notFound: string;
    error: string;
  };
  plugins: Record<string, string>;
}
