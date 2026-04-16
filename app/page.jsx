import dynamic from "next/dynamic";
const RenderBlock = dynamic(() => import("../components/RenderBlock"), {
  ssr: false,
});

export default async function Page() {
  const baseUrl = "https://www.creativeeventsaustralia.com.au";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <main>Failed to load content.</main>;
  }

  const data = await res.json();
  const site = data[0]; // ✅ FIX

  const pageData = site?.pages?.find((p) => p.route === "home");

  if (!pageData) {
    return <main>Page not found.</main>;
  }

  return (
    <main>
      {pageData.components?.map((b, i) => (
        <RenderBlock key={i} block={b} site={site} />
      ))}
    </main>
  );
}
