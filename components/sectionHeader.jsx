"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Label from "./lable";
import Typography from "./typography";
import Image from "next/image";

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  imageSrc = null,
  imageAlt = "",
  imageVisibleOn = "mobile",
  labelBgColor = "var(--color-blue-300)", // 👈 new prop

  variant = "primary", // PRIMARY | SECONDARY
}) {
  // ADD THIS 🔥
  const variants = {
    secondary: "section-header-secondary",
  };

  // Animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  // Image visibility logic
  const imageVisibilityClass =
    imageVisibleOn === "both"
      ? "block"
      : imageVisibleOn === "desktop"
      ? "hidden md:block"
      : "block md:hidden";

  // Title variant logic
  const titleVariant = variant === "secondary" ? "h3" : "h2";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={clsx(
        "headerSection flex flex-col gap-3",
        variants[variant], // <-- add variant CSS class 🔥
        align === "center" && "text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        className
      )}
    >
      {/* LABEL */}
      {label && (
        <motion.div variants={item} className="w-full">
          <Label
            className="lable"
            text={label}
            bgColor={labelBgColor}
            variant={variant}
          />
        </motion.div>
      )}

      {/* IMAGE */}
      {imageSrc && (
        <motion.div
          variants={item}
          className={clsx("w-full flex justify-center", imageVisibilityClass)}
        >
          {/* wrapper to control size, spacing — adjust max-w as required */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={280}
            height={280}
            className="w-full h-auto object-contain rounded-md"
          />
        </motion.div>
      )}

      {/* TITLE */}
      {title && (
        <motion.div variants={item} className="w-full">
          <Typography variant={titleVariant}>{title}</Typography>
        </motion.div>
      )}

      {/* SUBTITLE */}
      {subtitle && (
        <motion.div variants={item} className="max-w-[816px] w-full">
          <Typography variant="body-4">{subtitle}</Typography>
        </motion.div>
      )}
    </motion.div>
  );
}
