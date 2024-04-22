import { Flex, Text } from "@chakra-ui/react";
import { Logo } from "../../../shared/ui";
import { useTheme } from "../../../shared/theme";
import { SpotifyButton } from "../components";
import { useNavigate } from "react-router-dom";
import * as React from "react";

export const LoginPageScreen = () => {
  const navigate = useNavigate();
  const { textStyles, colors } = useTheme();

  React.useEffect(() => {
    const url = window.location.href.replace("#", "?");
    const searchParams = new URL(url).searchParams;

    const error = searchParams.get("error");

    if (error) {
      console.error(error);
      return;
    }

    const token = searchParams.get("access_token");
    if (token) {
      localStorage.setItem("SPOTIFY_ACCESS_TOKEN", token);
      navigate("/home");
    }
  }, [navigate]);

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
        <SpotifyButton />
      </Flex>
    </Flex>
  );
};
