import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../uiFields/Button";
import backgroundImage from "../../assets/Img/backgroundImage.png"; // Replace "png" with the actual image extension

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setUsername(value);
  };
  const handleChange1 = (value) => {
    setPassword(value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.1.73:8080/api/authenticate",
        {
          username,
          password,
        }
      );

      const token = response.data.token;
      console.log(token);

      if (response) {
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
    }
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
        <div className="  border  shadow-lg bg-white h-96  mt-8 rounded-md px-8 items-center  justify-center lg:justify-start mb-6">
          <div className="flex flex-row items-center  justify-center mt-5 lg:justify-start mb-6">
            <p className="mb-0 mr-4 text-lg">Sign in with</p>
            {/* Social media buttons */}
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-900 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              {/* Replace the SVG path below with the actual icon path */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-900 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              {/* Replace the SVG path below with the actual icon path */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-900 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              {/* Replace the SVG path below with the actual icon path */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>

            {/* Add other social media buttons here */}
          </div>

          <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
              class="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address" />
            <label
              for="exampleFormControlInput2"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

         
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border-b-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password" />
            <label
              for="exampleFormControlInput22"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

          {/* ... Remember me and Forgot password section ... */}

          <div className="text-center lg:text-left">
            <div className="mt-10">
              <Button
                buttonText="Sign In"
                textPosition="text-center"
                textColor="text-white"
                fontweight="font-medium"
                bg="bg-profile"
                btnHight="h-10"
                border="border border-profile"
                padding="px-5"
                btnwidth="w-full"
                btnPosition="relative"
                type="submit"
              />
            </div>
            <a
              class="text-customText transition  mb-0 mt-2 pt-1 text-sm font-semibold duration-150 ease-in-out hover:text-profile focus:text-profile active:text-profile"
              href="#"
            >
              Forgot Password?
            </a>
            <p className="mb-0  pt-1 text-sm font-semibold text-customText">
              Don't have an account?
              <Link
                to="/signup"
                className="text-customText transition ml-2 duration-150 ease-in-out hover:text-profile focus:text-profile active:text-profile"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
