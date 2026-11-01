export default function BrandLogo({ variant = "black" }: { variant?: "black" | "white" }) {
  return (
    <svg
      className="brand-logo"
      viewBox="66 325 891 373"
      width="891"
      height="373"
      role="img"
      aria-label="FTIZOL"
      focusable="false"
    >
      {/* Frame the artwork without changing the supplied PNG or its proportions. */}
      <image href={`/ftizol-logo-${variant}.png`} width="1024" height="1024" />
    </svg>
  );
}
