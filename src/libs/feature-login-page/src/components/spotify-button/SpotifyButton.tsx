import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../../../../shared/theme";
import { Icons } from "../../../../shared/assets";

type SpotifyButtonProps = {
  onClick: () => void;
};

export const SpotifyButton = React.memo(({ onClick }: SpotifyButtonProps) => {
  const { textStyles, colors } = useTheme();
  return (
    <Button
      onClick={onClick}
      p="8"
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
