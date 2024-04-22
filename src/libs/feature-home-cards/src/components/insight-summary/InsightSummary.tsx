import { Flex, Text } from "@chakra-ui/react";
import { InsightCard } from "../insight-card";
import { useTheme } from "../../../../shared/theme";
import * as React from "react";
import { baseFetcher } from "../../../../data-access";
import { SpotifyArtistItem, SpotifyTrack } from "../../../../data-access-types";
import { capitaliseEachWord } from "../../../../shared/utils";

export const InsightSummary = () => {
  const [mostStreamedArtist, setMostStreamedArtist] =
    React.useState<SpotifyArtistItem | null>(null);
  const [mostStreamedSong, setMostStreamedSong] =
    React.useState<SpotifyTrack | null>(null);
  const { textStyles, colors } = useTheme();

  React.useEffect(() => {
    baseFetcher(
      "https://api.spotify.com/v1/me/top/artists?limit=1&time_range=short_term"
    ).then((response) => {
      setMostStreamedArtist(response.data.items[0]);
    });

    baseFetcher(
      "https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term"
    ).then((response) => {
      setMostStreamedSong(response.data.items[0]);
    });
  }, []);

  const artistConfig = React.useMemo(() => {
    if (!mostStreamedArtist) return null;

    return {
      title: mostStreamedArtist.name,
      subtitle: capitaliseEachWord(
        mostStreamedArtist.genres.slice(0, 3).join(", ")
      ),
      imageUrl: mostStreamedArtist.images[0].url,
      linkUrl: mostStreamedArtist.external_urls.spotify,
    };
  }, [mostStreamedArtist]);

  const songConfig = React.useMemo(() => {
    if (!mostStreamedSong) return null;

    return {
      title: mostStreamedSong.name,
      subtitle: mostStreamedSong.artists[0].name,
      imageUrl: mostStreamedSong.album.images[0].url,
      linkUrl: mostStreamedSong.external_urls.spotify,
    };
  }, [mostStreamedSong]);

  return (
    <Flex gap="8">
      <Flex flexDirection="column" gap="4">
        <Flex flexDirection="column">
          <Text {...textStyles.h2_bold} color={colors.textPrimary}>
            Most Streamed Artist
          </Text>
          <Text {...textStyles.body1_400} color={colors.textSecondary}>
            In the past 4 weeks
          </Text>
        </Flex>
        {artistConfig && <InsightCard {...artistConfig} />}
      </Flex>

      <Flex flexDirection="column" gap="4">
        <Flex flexDirection="column">
          <Text {...textStyles.h2_bold} color={colors.textPrimary}>
            Most Played Song
          </Text>
          <Text {...textStyles.body1_400} color={colors.textSecondary}>
            In the past 4 weeks
          </Text>
        </Flex>
        {songConfig && <InsightCard {...songConfig} />}
      </Flex>
    </Flex>
  );
};
