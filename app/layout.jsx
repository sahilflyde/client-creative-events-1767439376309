import "./globals.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default async function RootLayout({ children }) {
  const baseUrl = "https://www.creativeeventsaustralia.com.au";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  const site = Array.isArray(data) ? data[0] : data;

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

        {/* Fonts */}
        {site?.fonts?.google?.map((font) => (
          <link key={font.family} href={font.importUrl} rel="stylesheet" />
        ))}

        {/* Colors */}
        <style>{`
          :root {
            ${cssVariables}
          }
        `}</style>
      </head>

      <body>
        <Header {...site.layout.header.props} site={site} />

        {children}

        <Footer {...site.layout.footer.props} site={site} />
      </body>
    </html>
  );
}
