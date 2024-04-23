import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../../../../shared/theme";
import { Icons } from "../../../../shared/assets";
import { v4 } from "uuid";

const STATE = v4();
const KEY = "SPOTIFY_AUTH_STATE";

const AUTH_URL = `https://accounts.spotify.com/authorize?show_dialog=true&client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&state=${STATE}&scope=user-top-read&redirect_uri=${window.location.origin}/login`;

localStorage.setItem(KEY, STATE);

export const SpotifyButton = React.memo(() => {
  const { textStyles, colors } = useTheme();

  return (
    <Button
      as="a"
      href={AUTH_URL}
      p={["6", "8"]}
      borderRadius={8}
      bgColor={colors.brandGreen}
      gap="2.5"
      _hover={{
        bgColor: colors.brandGreen_hover,
        boxShadow: `0px 0px 4px ${colors.brandGreen_hover}`,
      }}
    >
      <Icons.Spotify />
      <Text {...textStyles.h2_bold} color={colors.textPrimary}>
        Log in with Spotify
      </Text>
    </Button>
  );
});
