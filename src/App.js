import React from "react";
import MainPage from "./pages/MainPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getApiData } from "./api/getApiData";
import { AppLayout } from "./layout/AppLayout";
import { QuizResults } from "./components/QuizResults";
import { Test } from "./pages/Test";
import Exam from "./components/Exam";
import { AptitudeQuiz } from "./pages/AptitudeQuiz";
import { AptitudeTopics } from "./pages/AptitudeTopics";
import Response from "./components/Response";
import Results from "./components/Results";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/aptitude",
          element: <AptitudeTopics />,
        },
        {
          path: "/aptitude/quiz",
          element: <AptitudeQuiz />,
          loader: ({ request }) => {
            const url = new URL(request.url);
            const category = url.searchParams.get("category");
            return getApiData(category);
          },
        },
        {
          path: "/quiz-results",
          element: <QuizResults />,
        },
        {
          path: "/coding",
          element: <MainPage />,
        },
      ],
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/exam",
      element: <Exam />,
    },
    {
      path: "/response",
      element: <Response />,
    },
    {
      path: "/result",
      element: <Results />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
