import React from "react";

const Input = ({
  inputText,
  inputBorder,
  inputWidth,
  inputMargin,
  inputPadding,
  inputTextSize,
  borderOutline,
  inputBg,
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={`${inputBorder} ${inputWidth} ${inputMargin} ${inputPadding} ${borderOutline} ${inputTextSize} ${inputBg}`}
      placeholder={inputText}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
