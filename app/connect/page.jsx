import ContactSupportOptions from "@/components/contactSupportOptions";


export default async function Page() {
  const baseUrl = "https://www.creativeeventsaustralia.com.au";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  const site = Array.isArray(data) ? data[0] : data;

  const pageData = site?.pages?.find((p) => p.route === "connect");

  const getSection = (type) =>
    pageData?.components?.find((c) => c.type === type);

  return (
    <main>
      <ContactSupportOptions {...getSection("contact-support-options")?.props} site = {site} />
    </main>
  );
}
