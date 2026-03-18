"use client";

import { useState, useEffect } from "react";
import SectionHeader from "./sectionHeader";
import Container  from "./spacing";
import OurTeamCard from "./ourTeamCard";

export default function AboutOurTeam({
  label = "Our Team",
  title = "Meet the People Behind Hirezy",
  subtitle = "A diverse team of experts passionate about revolutionizing recruitment.",

  members = [
    {
      name: "Sarah Johnson",

      imageSrc: "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
    },
    {
      name: "Michael Lee",

      imageSrc: "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
    },
    {
      name: "Emily Carter",

      imageSrc: "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
    },
  ],

  alignDesktop = "center",
  alignMobile = "center",
  compVariant = "primary",
  compVariantValues = ["primary", "pink"],
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 450);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`about-our-team-wrapper ${
        compVariant === "pink" ? "pink" : "primary"
      }`}
    >
      <Container className="about-our-team-parent-container" variant="primary">
        {/* HEADER */}
        <div className="about-our-team-heading">
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
            align={isMobile ? alignMobile : alignDesktop}
          />
        </div>

        {/* TEAM MEMBERS */}
        <div className="our-team-cards-container">
          {members.map((member, index) => (
            <OurTeamCard
              key={index}
              name={member.name}
              description={member.role}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
