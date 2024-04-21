import { Button, Flex } from "@chakra-ui/react";
import { InsightSummary } from "../../../feature-home-cards";
import { HomeList } from "../../../feature-home-list";
import { Logo } from "../../../shared/ui";

export const HomePageScreen = () => {
  return (
    <Flex flexDirection="column" p="16" gap="8">
      <Flex justifyContent="space-between">
        <Logo />
        <Button>Log Out</Button>
      </Flex>
      <Flex gap="8">
        <InsightSummary />
        <HomeList />
      </Flex>
    </Flex>
  );
};
