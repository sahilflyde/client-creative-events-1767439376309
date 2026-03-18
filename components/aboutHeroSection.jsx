"use client";
import { useEffect, useState } from "react";
import SectionHeader from "./sectionHeader";
import Container from "./spacing";

export default function AboutHeroSection({
  label = "About Us",
  title = "Transforming Hiring, One Connection at a Time",
  subtitle = "At Hirezy, we believe finding the right talent shouldn’t be complicated.",
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 450);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Container variant="primary">
      <div className="team-heading">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align={isMobile ? "left" : "center"}
        />
      </div>
    </Container>
  );
  
}
