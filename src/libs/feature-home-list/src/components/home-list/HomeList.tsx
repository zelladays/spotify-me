import { Flex, Text } from "@chakra-ui/react";
import { HomeListItem } from "../home-list-item";
import { useTheme } from "../../../../shared/theme";
import { HomeListEmptyPlaceholder } from "../home-list-empty-placeholder";

type MyResItem = {
  name: string;
  artists: [name: string];
  externalUrls: {
    spotify: string;
  };
};

type MyRes = {
  items?: MyResItem[];
};

export const HomeList = () => {
  const { textStyles, colors } = useTheme();

  const data = {} as MyRes;

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
        {!data.items?.length ? (
          <HomeListEmptyPlaceholder />
        ) : (
          data.items.map((item) => (
            <HomeListItem
              title={item.name}
              linkUrl={item.externalUrls.spotify}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
};
