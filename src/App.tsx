import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import QuestionList from "./components/QuestionList";
import QuestionList02 from "./components/QuestionList02";
import QuestionList03 from "./components/QuestionList03";
import QuestionList04 from "./components/QuestionList04";
import PsycholResult from "./components/PsychoResult";

// import Router from "./router/Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/question",
    element: <QuestionList />,
  },
  {
    path: "/question02",
    element: <QuestionList02 />,
  },
  {
    path: "/question03",
    element: <QuestionList03 />,
  },
  {
    path: "/question04",
    element: <QuestionList04 />,
  },
  {
    path: "/psycholResult",
    element: <PsycholResult />,
  },
]);

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
