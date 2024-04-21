import React from "react";
import { NavigationRouter } from "./pages/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "../config/reportWebVitals";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../libs/shared/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex width="100vw" height="100vh">
          <NavigationRouter loggedIn />
        </Flex>
      </Router>
    </ChakraProvider>
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
