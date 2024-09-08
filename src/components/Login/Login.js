import React, { useState } from "react";
import Header from "../Header/Header";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="bg-image"
        />
      </div>

      <form
        className={`absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg ${
          isSignup ? "signup-form" : "login-form"
        }`}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignup ? "Sign Up" : "Sign In"}
        </h1>
        {isSignup && (
          // Signup form fields
        
            <input
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
        )}
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-4 w-full bg-gray-700"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 my-4 w-full bg-gray-700"
            />
            <button className="bg-red-500 w-full p-4 my-6 rounded-lg">{
              isSignup ? "Sign Up" : "Sign In"
            }</button>
        
        <p className="py-6">
          {isSignup ? "Already have an account?" : "New to Netflix?"}
          <span className="ms-1 cursor-pointer text-red-700" onClick={handleToggleForm}>
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
