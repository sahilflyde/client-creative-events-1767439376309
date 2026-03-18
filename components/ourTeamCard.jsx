"use client";

import Image from "next/image";
import Typography from "./typography";

export default function TeamCard({
  name,
  description,
  imageSrc = "/images/pro-icon.svg",
}) {
  return (
    <div className="team-card">
      <div className="team-img-container">
        <Image src={imageSrc} alt={name} width={280} height={280} />
      </div>
      <Typography className="team-name" variant="h3">{name}</Typography>
      <Typography className="team-subtitle" variant="body-4">{description}</Typography>
    </div>
  );
}
