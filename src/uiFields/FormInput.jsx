// FormInput.js
import React from "react";
import Input from "./Input";

const FormInput = ({ inputText, name, value, onChange }) => {
  return (
    <Input
      inputText={inputText}
      inputBorder="border-b border-neutral-300"
      inputWidth="w-full"
      inputPadding="px-3 py-2"
      inputTextSize="text-sm"
      borderOutline="outline-none"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
