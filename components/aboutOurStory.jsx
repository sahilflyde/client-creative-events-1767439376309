"use client";
import React from "react";
import  Container  from "./spacing";
import SectionHeader from "./sectionHeader";
import Image from "next/image";

export default function AboutOurStory({
  label = "Our Story",
  title = "Building Better Hiring Since 2019",
  align = "left",
  subtitle = [
    "Founded by a team of HR professionals and tech innovators, Hirezy was born from a simple observation: recruitment was broken. Too many tools, too much complexity, and not enough focus on what matters – finding great people.",
    "Today, we serve over 500 companies worldwide, helping them streamline their hiring process and build exceptional teams. Our platform has facilitated more than 10,000 successful hires and continues to evolve based on real feedback from real recruiters.",
  ],

  imageSrc = "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
  imageAlt = "About image",
  imageWidth = 571,
  imageHeight = 520,
  variant = "default",
}) {
  return (
    <Container className="about-spacing-two" variant="primary">
      <div className={`about-container ${variant}`}>
        {/* TEXT SIDE */}
        <div className="about-heading">
          <SectionHeader
            label={label}
            title={title}
            align={align}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            subtitle={
              <>
                {subtitle.map((text, index) => (
                  <p key={index} style={{ marginBottom: "16px" }}>
                    {text}
                  </p>
                ))}
              </>
            }
          />
        </div>

        {/* IMAGE SIDE */}
        <div className="about-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </Container>
  );
}
