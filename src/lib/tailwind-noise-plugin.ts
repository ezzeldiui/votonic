import plugin from "tailwindcss/plugin";

export const noisePlugin = plugin(function ({ addUtilities }) {
  const noiseUtilities = {
    ".bg-noise": {
      position: "relative",
      isolation: "isolate",
      "&::after": {
        content: '""',
        position: "absolute",
        inset: "0",
        zIndex: "-1",
        opacity: "0.35",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      },
    },
    ".bg-noise-subtle": {
      position: "relative",
      isolation: "isolate",
      "&::after": {
        content: '""',
        position: "absolute",
        inset: "0",
        zIndex: "-1",
        opacity: "0.15",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      },
    },
  };

  addUtilities(noiseUtilities);
});
