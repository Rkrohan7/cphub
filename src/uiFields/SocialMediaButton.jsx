// SocialMediaButton.js
import React from "react";

const SocialMediaButton = ({ onClick, icon }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center mr-1 transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none"
    >
      {icon}
    </button>
  );
};

export default SocialMediaButton;
