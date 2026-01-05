"use client";
import React from "react";
import Container from "./spacing";
import Metric from "./Metric";

export default function MetricSection({
  metrics = [
    
  ],
}) {
  return (
    <Container variant="section">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-[50px]  ">
        {metrics.map((m, i) => (
          <Metric key={i} number={m.number} label={m.label} />
        ))}
      </div>
    </Container>
  );
}
