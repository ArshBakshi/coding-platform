import React from "react";
import MainPage from "./pages/MainPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getApiData } from "./api/getApiData";
import { Aptitude } from "./pages/Aptitude";
import { Maths } from "./pages/Maths";
import { Logical } from "./pages/Logical";
import { AppLayout } from "./layout/AppLayout";
import { QuizResults } from "./components/QuizResults";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
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
          loader: getApiData,
        },
        {
          path: "/coding",
          element: <MainPage />,
        },
        {
          path:"/quiz-results",
          element:<QuizResults />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
