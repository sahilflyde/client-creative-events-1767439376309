import dynamic from "next/dynamic";

const RenderBlock = dynamic(() => import("../../components/RenderBlock"), {
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

  // ✅ handle array / object both
  const site = Array.isArray(data) ? data[0] : data;

  const pageData = site?.pages?.find((p) => p.route === "about");

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
