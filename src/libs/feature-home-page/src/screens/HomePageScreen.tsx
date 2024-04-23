import { Button, Flex, Text } from "@chakra-ui/react";
import { InsightSummary } from "../../../feature-home-cards";
import { HomeList } from "../../../feature-home-list";
import { Logo } from "../../../shared/ui";
import * as React from "react";
import { Icons } from "../../../shared/assets";

export const HomePageScreen = () => {
  const handleLogOut = React.useCallback(() => {
    localStorage.removeItem("SPOTIFY_ACCESS_TOKEN");
    window.location.href = "/login";
  }, []);

  return (
    <Flex flexDirection="column" p={["8", "16"]} gap="8" width="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <Logo />
        <Flex
          as="button"
          onClick={handleLogOut}
          cursor="pointer"
          p="4"
          borderRadius={8}
          transition="all 0.2s ease-in-out"
          _hover={{ bgColor: "rgba(255,255,255,0.1)" }}
        >
          <Icons.LogOut />
        </Flex>
      </Flex>
      <Flex gap="8" flexDirection={["column", "column", "column", "row"]}>
        <InsightSummary />
        <HomeList />
      </Flex>
      <Text
        zIndex={1}
        alignSelf="flex-end"
        as="a"
        color="rgba(255, 255, 255, 0.37)"
        href="https://github.com/zelladays/spotify-me"
        _hover={{
          color: "rgba(255, 255, 255, 0.87)",
        }}
      >
        Developed by @LuckyWest
      </Text>
    </Flex>
  );
};
