import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Page } from "./Page";
import { HomePage } from "../home";

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
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </AnimatePresence>
  );
}
