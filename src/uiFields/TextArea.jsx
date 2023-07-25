import React from "react";

export default function Textarea(props) {
  const {
    inputText,
    inputBorder,
    inputWidth,
    inputMargin,
    inputPadding,
    inputTextSize,
    borderOutline,
    inputBg,
  } = props;
  return (
    <div>
      <textarea
        className={`${inputBorder} ${inputWidth} ${inputMargin} ${inputPadding} ${borderOutline} ${inputTextSize} ${inputBg}`}
        placeholder={inputText}
      ></textarea>
    </div>
  );
}
