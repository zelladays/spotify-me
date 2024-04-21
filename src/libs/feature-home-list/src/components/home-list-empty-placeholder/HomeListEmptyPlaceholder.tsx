import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../shared/theme";

export const HomeListEmptyPlaceholder = () => {
  const { colors, textStyles } = useTheme();

  return (
    <Flex justifyContent="space-between" width="100%">
      <Text {...textStyles.body1_400} color={colors.textTertiary}>
        You haven't listened to any songs in the past 4 weeks...
      </Text>
    </Flex>
  );
};
