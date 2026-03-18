"use client";
import React from "react";
import clsx from "clsx";
import Typography from "./typography";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  variant = "gray",
  className,
  ...props
}) => {
  const isContact = variant === "ContactPageVariantInput";

  return (
    <div
      className={clsx(
        isContact ? "ContactPageVariantInput" : "input-wrapper",
        className
      )}
    >
      <Typography variant={isContact ? "h6" : "body-3"}>
        {label && <label htmlFor={name}>{label}</label>} 
      </Typography>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ""} // ✅ always controlled
        onChange={onChange}
        className={clsx("input-field", {
          "input-default": variant === "default",
          "input-gray": variant === "gray",
          "input-ContactPageVariantInput": isContact,
        })}
        {...props}
      />
    </div>
  );
};

export default Input;
