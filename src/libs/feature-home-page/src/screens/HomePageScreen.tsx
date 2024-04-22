import { Button, Flex } from "@chakra-ui/react";
import { InsightSummary } from "../../../feature-home-cards";
import { HomeList } from "../../../feature-home-list";
import { Logo } from "../../../shared/ui";
import * as React from "react";

export const HomePageScreen = () => {
  const handleLogOut = React.useCallback(() => {
    localStorage.removeItem("SPOTIFY_ACCESS_TOKEN");
    window.location.href = "/login";
  }, []);

  return (
    <Flex flexDirection="column" p="16" gap="8" width="100%">
      <Flex justifyContent="space-between">
        <Logo />
        <Button onClick={handleLogOut}>Log Out</Button>
      </Flex>
      <Flex gap="8">
        <InsightSummary />
        <HomeList />
      </Flex>
    </Flex>
  );
};
