import React, { useState } from "react";

export default function Anchor(props) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    buttonText,
    textPosition,
    textColor,
    fontweight,
    bg,
    btnHight,
    border,
    padding,
    anchorText,
    anchorLink,
    textSize,
    hover,
    duration,
    transitionAnchor,
    margin,
    onClick,
    borderBottom,
  } = props;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="anchor-wrapper text-center justify-between"
      style={{ width: "100%" }}
    >
      <a
        className={`${bg} ${textColor} ${fontweight} ${btnHight} ${border} ${anchorLink} ${textSize} ${padding} ${margin} ${hover} ${duration} ${transitionAnchor}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {anchorText}
      </a>
      {isHovered && (
        <div
          className={`border-b-2 ${borderBottom} border-profile relative w-full ml-2 sm:w-auto`}
        ></div>
      )}
    </div>
  );
}
