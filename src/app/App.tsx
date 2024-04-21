import React from "react";
import { NavigationRouter } from "./pages/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../config/reportWebVitals";

function App() {
  return (
    <Router>
      <NavigationRouter loggedIn />
    </Router>
  );
}

export const init = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};
