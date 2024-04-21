import { Text } from "@chakra-ui/react";
import { useTheme } from "../../../../theme";

export const Logo = () => {
  const { colors, textStyles } = useTheme();

  return (
    <Text {...textStyles.h1} pointerEvents="none">
      <Text as="span" color={colors.brandGreen}>
        Spotify
      </Text>
      <Text as="span" color={colors.textPrimary}>
        Me.
      </Text>
    </Text>
  );
};
