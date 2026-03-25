"use client";
import Typography from "./typography";
import Link from "next/link";

const ImageCards = ({
  heading = "Demo Heading",
  link = "",
  description = "Lorem Ipsum dolor sits on the wall",
  imageLink = "https://ik.imagekit.io/flyde/Hirezy/Widget.png?updatedAt=1761895813353",
  textPosition = "top",
  classNameCustom = "",
  imageClassName = "",
  variant = "compact",
}) => {
  const isRight = textPosition === "right";
  const isSoldOut = description?.toLowerCase().includes("sold out");

  const CardContent = (
    <div
      className={`
        image-card
        image-card--${variant}
        ${isRight ? "image-card--right" : ""}
        ${classNameCustom}
        ${isSoldOut ? "cursor-not-allowed" : "cursor-pointer "}
      `}
    >
      {textPosition === "top" && (
        <div className="image-card__content">
          <Typography variant="h3">{heading}</Typography>
          <Typography variant="body-4" className="color-black-400">
            {description}
          </Typography>
        </div>
      )}

      <div className="image-card__media">
        <img
          src={imageLink}
          alt={heading}
          className={`image-card__img ${imageClassName}`}
        />
      </div>

      {(textPosition === "bottom" || textPosition === "right") && (
        <div className="image-card__content">
          <Typography variant="h3">{heading}</Typography>
          <Typography variant="body-4" className="color-black-400">
            {description}
          </Typography>
        </div>
      )}
    </div>
  );

  // Wrap in Link only if not sold out and link exists
  if (!isSoldOut && link) {
    return <Link href={link}>{CardContent}</Link>;
  }

  // Otherwise just return the card div (not clickable)
  return CardContent;
};

export default ImageCards;
