"use client";
import React from "react";
import Image from "next/image";
import Typography from "./typography";

export default function OfficeHours() {
  return (
    <section className="office-hours-wrapper">
      <div className="office-hours-card">
        <div className="oh-header">
          <Typography variant="h3" className="oh-title">
            Office Hours
          </Typography>
          <Typography variant="body-4" className="oh-desc">
            Our team is available during these hours:
          </Typography>
        </div>

        <div className="oh-rows">
          <div className="oh-row">
            <Typography variant="body-4" className="oh-day">
              Monday – Friday
            </Typography>
            <Typography variant="body-4" className="oh-time">
              9:00 AM – 6:00 PM
            </Typography>
          </div>

          <div className="oh-row">
            <Typography variant="body-4" className="oh-day">
              Saturday
            </Typography>
            <Typography variant="body-4" className="oh-time">
              10:00 AM – 4:00 PM
            </Typography>
          </div>

          <div className="oh-row">
            <Typography variant="body-4" className="oh-day">
              Sunday
            </Typography>
            <Typography variant="body-4" className="oh-time">
              Closed
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
