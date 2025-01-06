import React from "react";
import MainPage from "./pages/MainPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getApiData } from "./api/getApiData";
import { Aptitude } from "./pages/Aptitude";
import { Maths } from "./pages/Maths";
import { Logical } from "./pages/Logical";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/logical",
      element: <Logical />,
    },
    {
      path: "/maths",
      element: <Maths />,
    },
    {
      path: "/aptitude",
      element: <Aptitude />,
      loader:getApiData,
    },
    {
      path: "/coding",
      element:<MainPage />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
