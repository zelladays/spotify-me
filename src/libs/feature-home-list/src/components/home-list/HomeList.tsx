import { Flex, Text } from "@chakra-ui/react";
import { HomeListItem } from "../home-list-item";
import { useTheme } from "../../../../shared/theme";
import { HomeListEmptyPlaceholder } from "../home-list-empty-placeholder";
import { SpotifyTrack } from "../../../../data-access-types";
import * as React from "react";
import { baseFetcher } from "../../../../data-access";

export const HomeList = () => {
  const { textStyles, colors } = useTheme();
  const [topSongs, setTopSongs] = React.useState<SpotifyTrack[] | null>(null);

  React.useEffect(() => {
    baseFetcher("https://api.spotify.com/v1/me/top/tracks?limit=25").then(
      (response) => {
        setTopSongs(response.data.items);
      }
    );
  }, []);

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
        {!topSongs?.length ? (
          <HomeListEmptyPlaceholder />
        ) : (
          topSongs.map((item, index) => (
            <HomeListItem
              title={`${index + 1}) ${item.artists[0].name} - ${item.name}`}
              linkUrl={item.external_urls.spotify}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
};
