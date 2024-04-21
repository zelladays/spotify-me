import { Button, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../shared/theme";

export const HomePageScreen = () => {
  const { textStyles } = useTheme();
  return (
    <Flex flexDirection="column" p="16" gap="8">
      <Flex justifyContent="space-between">
        <Text {...textStyles.h1}>SpotifyMe.</Text>
        <Button>Log Out</Button>
      </Flex>
      <Flex gap="8">
        <Flex>Most Streamed Artist</Flex>
        <Flex>Most Played Song</Flex>
        <Flex flex={1} border="1px black solid">
          Your Top Songs
        </Flex>
      </Flex>
    </Flex>
  );
};
