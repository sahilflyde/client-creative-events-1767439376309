"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import Container from "./spacing";
import SectionHeader from "./sectionHeader";
import Input from "./input";
import InputGroup from "./InputGroup";
import Typography from "./typography";
import { Button } from "./button";
import ContactInfo from "./contactInfo";
import OfficeHours from "./officeHours";

export default function ContactSupportOptions({ site }) {
  const [isMobile, setIsMobile] = useState(false);

  /* =============================
     🔥 EXTRACT CONTACT COMPONENT
     ============================= */
  const contactComponent =
    site?.pages
      ?.find((page) => page.route === "connect")
      ?.components?.find((comp) => comp.type === "contact-support-options") ||
    null;

  const props = contactComponent?.props || {};

  const { header, formSection, supportSection, sideInfo } = props;

  /* =============================
     FORM STATE
     ============================= */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (name, e) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email?.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    try {
      await axios.post(
        `https://blinkflo-backend.onrender.com/api/leads/${site?.slug}`,
        {
          email: formData.email,
          type: "contactForm",
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.company,
          message: formData.message,
        }
      );

      alert("Contact Form Filled!!");
    } catch (err) {
      alert("Server error, please try again");
    }
  };

  /* =============================
     RESPONSIVE
     ============================= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 450);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!contactComponent) return null;

  return (
    <div className="contactUsLayoutShift">
      {/* ================= HEADER ================= */}
      {/* {header && (
        <Container variant="header">
          <SectionHeader
            label={header.label}
            title={header.title}
            subtitle={header.subtitle}
            align={isMobile ? "left" : header.align}
          />
        </Container>
      )} */}

      {/* ================= FORM + SIDE ================= */}
      <Container variant="primary" className="flex items-start justify-between flex-wrap gap-6 ">
        {/* FORM */}
        <div className="contact-form-wrapper">
          <SectionHeader {...formSection?.header} align="left" />

          <div className="flex flex-col gap-[var(--sp-24)] mt-4 ">
            {formSection?.fields?.map((field, i) =>
              field.type === "group" ? (
                <InputGroup key={i} columns={field.columns}>
                  {field.inputs.map((input, idx) => (
                    <Input
                      key={idx}
                      {...input}
                      value={formData[input.name]}
                      onChange={(e) => handleChange(input.name, e)}
                    />
                  ))}
                </InputGroup>
              ) : (
                <Input
                  key={i}
                  {...field}
                  value={formData[field.name]}
                  onChange={(e) => handleChange(field.name, e)}
                />
              )
            )}

            <Button
              variant={formSection?.submitButton?.variant || "primary"}
              size={formSection?.submitButton?.size || "smTwo"}
              icon={
                <Image
                  src={
                    formSection?.submitButton?.icon ||
                    "https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png"
                  }
                  width={14}
                  height={12}
                  alt="arrow"
                />
              }
              iconPosition={formSection?.submitButton?.iconPosition}
              className="!w-fit"
              onClick={handleSubmit}
            >
              <Typography variant="h4">
                {formSection?.submitButton?.label || "Send Message"}
              </Typography>
            </Button>
          </div>
        </div>

        {/* SIDE INFO */}
        <div className="contact-info-container">
          {sideInfo?.contactInfo && (
            <ContactInfo contactInfo={sideInfo.contactInfo} />
          )}

          {/* {sideInfo?.officeHours && <OfficeHours {...sideInfo.officeHours} />} */}
        </div>
      </Container>
    </div>
  );
}
