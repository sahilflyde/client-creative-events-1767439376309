"use client";

import Image from "next/image";
import Typography from "./typography";

export default function ContactInfo({
  title = "Contact Information",
  description = "Reach out to us directly through any of these channels.",

  contactInfo = {
    email: "",
    phone: "",
    address: "",
  },
}) {
  const items = [
    contactInfo.email && {
      label: "Email",
      value: contactInfo.email,
      icon: "https://ik.imagekit.io/75zj3bigp/Container%20(1).png",
    },
    contactInfo.phone && {
      label: "Phone",
      value: contactInfo.phone,
      icon: "https://ik.imagekit.io/75zj3bigp/Icon%20(7).png",
    },
    contactInfo.address && {
      label: "Office",
      value: contactInfo.address,
      icon: "https://ik.imagekit.io/75zj3bigp/Container%20(2).png",
    },
  ].filter(Boolean); // 🔥 empty values auto remove

  return (
    <section className="section-contact-wrapper">
      <div className="contact-card">
        {/* HEADER */}
        <div className="flex flex-col gap-[var(--sp-16)]">
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body-4">{description}</Typography>
        </div>

        {/* ITEMS */}
        <div className="flex flex-col gap-[var(--sp-24)] mt-2 ">
          {items.map((item, i) => (
            <div className="contact-row" key={i}>
              <Image src={item.icon} width={18} height={18} alt={item.label} />
              <div>
                <Typography variant="h6">{item.label}</Typography>
                <Typography variant="body-4">{item.value}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
