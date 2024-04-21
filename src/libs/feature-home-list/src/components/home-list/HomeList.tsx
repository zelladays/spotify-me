import { Flex, Text } from "@chakra-ui/react";
import { HomeListItem } from "../home-list-item";
import { useTheme } from "../../../../shared/theme";

export const HomeList = () => {
  const { textStyles, colors } = useTheme();

  return (
    <Flex flexDirection="column" gap="4" width="100%">
      <Flex flexDirection="column">
        <Text {...textStyles.h2_bold} color={colors.textPrimary}>
          Most Streamed Artist
        </Text>
        <Text {...textStyles.body1_400} color={colors.textSecondary}>
          In the past 4 weeks
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <HomeListItem
          title="1) Bryson Tiller - Don't"
          linkUrl="https://google.com"
        />
        <HomeListItem
          title="2) Bryson Tiller - Exchange"
          linkUrl="https://google.com"
        />
        <HomeListItem
          title="3) Bryson Tiller - Rambo"
          linkUrl="https://google.com"
        />
        <HomeListItem
          title="4) Bryson Tiller - Sorry Not Sorry"
          linkUrl="https://google.com"
        />
        <HomeListItem
          title="5) Bryson Tiller - Run Me Dry"
          linkUrl="https://google.com"
        />
      </Flex>
    </Flex>
  );
};
