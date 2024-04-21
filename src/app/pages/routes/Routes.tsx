import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Page } from "./Page";
import { HomePage } from "../home";
import { LoginPage } from "../login";

export function NavigationRouter({ loggedIn }: { loggedIn: boolean }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/home"
          element={
            <Page title="SpotifyMe - Insights">
              <HomePage />
            </Page>
          }
        />
        <Route
          path="/login"
          element={
            <Page title="SpotifyMe - Login">
              <LoginPage />
            </Page>
          }
        />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}
