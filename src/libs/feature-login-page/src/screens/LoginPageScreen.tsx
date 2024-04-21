import { Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "../../../shared/ui";
import { useTheme } from "../../../shared/theme";
import { SpotifyButton } from "../components";

export const LoginPageScreen = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bgColor={colors.brandDarkGrey}
        p="16"
        gap="6"
        borderRadius={8}
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="column">
          <Logo />
          <Text {...textStyles.body1_400} color={colors.textSecondary}>
            Get insights on what you listen to.
          </Text>
        </Flex>
        <SpotifyButton onClick={() => {}} />
      </Flex>
    </Flex>
  );
};
