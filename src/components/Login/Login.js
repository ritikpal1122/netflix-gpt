import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../../utils/constant";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleToggleForm = () => {
    setIsSignup(!isSignup);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // signin / signup
    if (isSignup) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })

            .then(() => {
              const { uid, email, displayName, photoURL } = user;
        // here will update the store
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL,
          })
        );
              // Profile updated!
              // ...
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });


          // ...
        })
        .catch((error) => { 
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          navigate("/")
          
          // alert("loged in")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="overflow-x-hidden h-screen relative ">
      <Header />
      <div className="absolute bgx-image h-full inset-0 w-full overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="bg-image"
          className="w-full h-full object-cover" 
        />
      </div>

      <form
        className={`absolute bg-black w-full max-w-sm md:max-w-md p-8 md:p-12 mt-20 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg ${
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
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 text-sm ">{errorMessage}</p>
        <button
          className="bg-red-500 w-full p-4 my-6 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        <p className="py-6">
          {isSignup ? "Already have an account?" : "New to Netflix?"}
          <span
            className="ms-1 cursor-pointer text-red-700"
            onClick={handleToggleForm}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
