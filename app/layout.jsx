import "./globals.scss";
import RenderBlock from "../components/RenderBlock";
import ImagePopup from "../components/ImagePopup.jsx";

export default async function RootLayout({ children }) {
  const baseUrl =
    "https://www.creativeeventsaustralia.com.au";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  const site = data[0];

  const activeColors =
    site?.darkmodeOn && site?.darkcolors ? site.darkcolors : site?.colors || {};

  const cssVariables = Object.entries(activeColors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

  return (
    <html lang="en">
      <head>
        <title>{site.websiteName}</title>
        <link rel="icon" href={site.favicon} />

        {/* ✅ Fonts */}
        {site?.fonts?.google?.map((font) => (
          <link key={font.family} href={font.importUrl} rel="stylesheet" />
        ))}

        {/* ✅ CSS Variables */}
        <style>{`
          :root {
            ${cssVariables}
          }
        `}</style>
      </head>

      <body>
        {site.layout?.header && (
          <RenderBlock
            block={site.layout.header}
            site={site}
            logo={site.logo}
          />
        )}

        {children}

        {site.layout?.footer && (
          <RenderBlock block={site.layout.footer} site={site} />
        )}
      </body>
    </html>
  );
}
