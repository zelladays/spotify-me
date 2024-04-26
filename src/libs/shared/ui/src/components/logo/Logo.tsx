import { Text } from "@chakra-ui/react";
import { useTheme } from "../../../../theme";

export const Logo = () => {
  const { colors, textStyles } = useTheme();

  return (
    <Text {...textStyles.h1} pointerEvents="none" alignItems="center">
      <Text as="span" color={colors.brandGreen}>
        Top
      </Text>
      <Text as="span" color={colors.textPrimary}>
        Stats.
      </Text>
    </Text>
  );
};
