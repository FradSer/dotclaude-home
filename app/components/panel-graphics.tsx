export function CoreGraphic() {
  return (
    <div
      className="panel-graphics"
      style={{ background: "var(--c-black)" }}
    >
      <svg
        className="svg-graphic"
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
      >
        <path d="M 0,40 A 50,40 0 0,1 100,40 Z" fill="var(--c-coral)" />
        <path d="M 100,40 A 50,40 0 0,1 200,40 Z" fill="var(--c-coral)" />
        <path d="M 0,80 A 50,40 0 0,1 100,80 Z" fill="var(--c-coral)" />
        <path d="M 100,80 A 50,40 0 0,1 200,80 Z" fill="var(--c-coral)" />
        <line
          x1="100" y1="0" x2="100" y2="80"
          stroke="var(--c-black)" strokeWidth="4"
        />
        <line
          x1="0" y1="40" x2="200" y2="40"
          stroke="var(--c-black)" strokeWidth="4"
        />
      </svg>
    </div>
  );
}

export function DevGraphic() {
  return (
    <div className="panel-graphics">
      <svg
        className="svg-graphic"
        viewBox="0 0 300 100"
        preserveAspectRatio="none"
      >
        <path d="M 80,0 A 80,50 0 0,0 80,100 Z" fill="var(--c-black)" />
        <path d="M 180,0 A 80,50 0 0,0 180,100 Z" fill="var(--c-black)" />
        <path d="M 280,0 A 80,50 0 0,0 280,100 Z" fill="var(--c-black)" />
      </svg>
    </div>
  );
}

export function ReactEcoGraphic() {
  return (
    <div className="panel-graphics">
      <svg
        className="svg-graphic"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 50,0 A 50,50 0 0,0 50,100 L 90,100 A 40,40 0 0,1 90,0 Z"
          fill="var(--c-white)"
        />
        <path
          d="M 150,0 A 50,50 0 0,0 150,100 L 190,100 A 40,40 0 0,1 190,0 Z"
          fill="var(--c-white)"
        />
        <path
          d="M 250,0 A 50,50 0 0,0 250,100 L 290,100 A 40,40 0 0,1 290,0 Z"
          fill="var(--c-white)"
        />
        <path
          d="M 350,0 A 50,50 0 0,0 350,100 L 390,100 A 40,40 0 0,1 390,0 Z"
          fill="var(--c-white)"
        />
      </svg>
    </div>
  );
}

export function ConfigGraphic() {
  return (
    <div className="panel-graphics">
      <svg
        className="svg-graphic"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <path d="M 0,50 A 50,50 0 0,1 100,50 Z" fill="var(--c-black)" />
        <path
          d="M 0,50 A 50,50 0 0,0 100,50 Z"
          fill="var(--c-black)"
          transform="translate(0, 50)"
        />
        <path
          d="M 100,50 A 50,50 0 0,0 200,50 Z"
          fill="var(--c-black)"
          transform="translate(0, -50)"
        />
        <path d="M 100,50 A 50,50 0 0,1 200,50 Z" fill="var(--c-black)" />
      </svg>
    </div>
  );
}

export function ExtraGraphic() {
  return (
    <div className="panel-graphics">
      <svg
        className="svg-graphic"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <rect x="10" y="10" width="80" height="80" fill="var(--c-black)" />
        <circle cx="50" cy="50" r="38" fill="var(--c-coral)" />
        <rect x="110" y="10" width="80" height="80" fill="var(--c-black)" />
        <circle cx="150" cy="50" r="38" fill="var(--c-coral)" />
      </svg>
    </div>
  );
}

const graphicMap: Record<string, React.FC> = {
  core: CoreGraphic,
  dev: DevGraphic,
  ui: ReactEcoGraphic,
  config: ConfigGraphic,
  extra: ExtraGraphic,
};

export function PanelGraphic({ panelId }: { panelId: string }) {
  const Graphic = graphicMap[panelId];
  return Graphic ? <Graphic /> : null;
}
