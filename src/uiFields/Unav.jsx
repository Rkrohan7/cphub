import React from "react";
import Arrow from "../assetes/Images/back_112351.png";
import { useNavigate } from "react-router-dom";

export default function UpperNav(props) {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("this is Upper");
    navigate(-1); // Go back one step in the browser history
  };

  const {
    unavText,
    imgBorder,
    imgShadow,
    imgPosition,
    imgColor,
    imgHeight,
    imageWidth,
    imgMargin,
    padding,
    font,
    onClick,
  } = props;

  return (
    <div
      className={`${imgHeight} ${imgBorder} ${imgShadow} ${imgPosition} ${imgColor}`}
    >
      <button onClick={goBack}>
        <img
          className={`${imgHeight} ${imageWidth} ${imgMargin}`}
          src={Arrow}
          alt={unavText}
        />
      </button>

      <p className={`${padding} ${font}`}>{unavText}</p>
    </div>
  );
}
