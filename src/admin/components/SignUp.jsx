import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import Button from "../../uiFields/Button";
import Input from "../../uiFields/Input";
import backgroundImage from "../../assets/Img/backgroundImage.png"; // Replace "png" with the actual image extension

export default function SignInPage() {
  const [values, setValues] = useState("");

  // const navigate = useNavigate();

  const handleChange = (value) => {
    setValues(value);
  };

  

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      {/* Left side: Image */}
      <div
        style={{
          flex: 1,
          background: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <div>
          {/* Add any image content or other elements on the left side */}
          {/* For example: */}
          <h1>Welcome to our website!</h1>
          <p>Discover amazing features.</p>
        </div>
      </div>

      {/* Right side: Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="max-w-md w-full border   py-8   bg-white shadow-lg">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <form className="px-8">
            <Input
              inputText="Full Name"
              inputBorder="border-b border-customText"
              inputWidth="w-full"
              inputPadding="px-1 py-3"
              inputTextSize="text-sm"
              borderOutline="outline-none"
              onChange={handleChange}
              
            />
            <div className="mt-1">
              <Input
                inputText="Mobile Number"
                inputBorder="border-b border-customText"
                inputWidth="w-full"
                inputPadding="px-1 py-3"
                inputTextSize="text-sm"
                borderOutline="outline-none"
               onChange={handleChange}
              />
            </div>
            <div className="mt-1">
              <Input
                inputText="Email"
                inputBorder="border-b border-customText"
                inputWidth="w-full"
                inputPadding="px-1 py-3"
                inputTextSize="text-sm"
                borderOutline="outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="mt-1">
              <Input
                inputText="Password"
                inputBorder="border-b border-customText"
                inputWidth="w-full"
                inputPadding="px-1 py-3"
                inputTextSize="text-sm"
                borderOutline="outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="mt-1">
              <Input
                inputText="Confirm Password"
                inputBorder="border-b border-customText"
                inputWidth="w-full"
                inputPadding="px-1 py-3"
                inputTextSize="text-sm"
                borderOutline="outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="mt-10">
              <Button
                buttonText="Sign Up"
                textPosition="text-center"
                textColor="text-white"
                fontweight="font-medium"
                bg="bg-profile"
                btnHight="h-10"
                border="border border-profile"
                padding="px-5"
                btnwidth="w-full"
                btnPosition="relative"
              />
            </div>
            <div className="flex text-center justify-center">
              <p className="text-customText  hover:text-profile flex justify-center items-center text-center mt-5 px-3 py-2 rounded-md text-sm font-medium">
                <span>Already a member?</span>
              </p>
              <Link
                to="/" // Replace "#" with the appropriate route path
                className="text-customText  hover:text-profile flex justify-center items-center text-center mt-5 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span>Sign in</span>
              </Link>
            </div>
          </form>
          <div class="text-center text-sm  px-8 text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b hover:text-profile ml-1 border-grey-dark text-customText"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              class="no-underline border-b hover:text-profile ml-1 border-grey-dark text-customText"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
