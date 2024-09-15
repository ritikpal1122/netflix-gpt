// import React, { useEffect } from "react";
import Login from "./Login/Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { useDispatch } from "react-redux";
// import { removeUser, setUser } from "./utils/userSlice";

const Body = () => {
  // const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider 
      
      router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
