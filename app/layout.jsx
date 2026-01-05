
import "./globals.scss";
import RenderBlock from "../components/RenderBlock";

export default async function RootLayout({ children }) {
  const slug = process.env.SITE_SLUG;

  const res = await fetch(
    `https://blinkflo-backend.onrender.com/api/websites/${slug}`,
    { cache: "no-store" }
  );
  const site = await res.json();

  // ✅ Decide active color set
  const activeColors =
    site?.darkmodeOn && site?.darkcolors
      ? site.darkcolors
      : site?.colors || {};

  // ✅ Generate CSS variables
  const cssVariables = Object.entries(activeColors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

  return (
    <html lang="en">
      <head>
        <title>{site.websiteName}</title>
        <link rel="icon" href={site.favicon} />

        {/* ✅ Inject dynamic CSS variables */}
        <style>{`
          :root {
            ${cssVariables}
          }
        `}</style>
      </head>

      <body>
        {/* GLOBAL HEADER */}
        {site.layout?.header && (
          <RenderBlock
            block={site.layout.header}
            site={site}
            logo={site.logo}
          />
        )}

        {children}

        {/* GLOBAL FOOTER */}
        {site.layout?.footer && (
          <RenderBlock
            block={site.layout.footer}
            site={site}
          />
        )}
      </body>
    </html>
  );
}
