

import AboutOurTeam from "@/components/aboutOurTeam";
import GridVideo from "@/components/GridVideo";
import MetricSection from "@/components/key-metric";
import TargetAudienceHero from "@/components/targetAudienceHero";
import TargetAudienceSectionComp from "@/components/targetAudienceSection";
import TransformSection from "@/components/TransformSection";

export default async function Page() {
  const baseUrl = "https://www.creativeeventsaustralia.com.au";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  const site = Array.isArray(data) ? data[0] : data;

  const pageData = site?.pages?.find((p) => p.route === "home");

  const getSection = (type) =>
    pageData?.components?.find((c) => c.type === type);

  return (
    <main>
      <TargetAudienceHero {...getSection("target-hero")?.props} />
      <MetricSection {...getSection("metrics-section")?.props} />
      <AboutOurTeam {...getSection("about-our-team")?.props} />
      <TargetAudienceSectionComp {...getSection("target-audience")?.props} />
      <GridVideo {...getSection("grid-video")?.props} />
      <TransformSection {...getSection("transform-section")?.props} />
      {/* <h1 className=" text-white " >
        Hello world
      </h1> */}
    </main>
  );
}
