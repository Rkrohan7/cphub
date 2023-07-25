import React from "react";

export default function Button(props) {
  const {
    buttonText,
    textPosition,
    textColor,
    fontweight,
    bg,
    btnHight,
    border,
    padding,
    onClick,
    btnPosition,
    btnwidth,
    margin,
    responsive,
    buttonTextSize,
  } = props;
  return (
    <button
      className={`${bg} ${buttonText}  ${textPosition} ${textColor} ${fontweight} ${btnHight} ${border} ${padding} ${margin} ${btnPosition} ${btnwidth} ${btnPosition} ${responsive} ${buttonTextSize} `}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
