import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import QuestionList from "./components/QuestionList";
import QuestionList02 from "./components/QuestionList02";

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
]);

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
