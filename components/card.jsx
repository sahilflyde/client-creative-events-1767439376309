"use client";
import Typography from "./typography";

const ImageCard = ({
  heading = "Demo Heading",
  description = "Lorem Ipsum dolor sits on the wall",
  imageLink = "https://ik.imagekit.io/flyde/Hirezy/Widget.png?updatedAt=1761895813353",
  textPosition = "top",
  classNameCustom = "",
  imageClassName = "",
  variant = "compact",
}) => {
  const isRight = textPosition === "right";

  const TextBlock = () => (
    <div className="cardHead">
      <Typography variant="h3">{heading}</Typography>
      <Typography variant="body-4" className="color-black-400">
        {description}
      </Typography>
    </div>
  );

  return (
    <div
      className={`
        imageCard
        imageCard--${variant}
        ${isRight ? "imageCard--right" : ""}
        ${classNameCustom}
      `}
    >
      {textPosition === "top" && <TextBlock />}

      <div className="imageWrapper">
        <img
          src={imageLink}
          alt="image card"
          className={`cardImg ${imageClassName}`}
        />
      </div>

      {textPosition === "bottom" && <TextBlock />}
      {textPosition === "right" && <TextBlock />}
    </div>
  );
};

export default ImageCard;
