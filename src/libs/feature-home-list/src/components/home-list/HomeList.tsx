import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { HomeListItem } from "../home-list-item";
import { useTheme } from "../../../../shared/theme";
import { HomeListEmptyPlaceholder } from "../home-list-empty-placeholder";
import { SpotifyTrack } from "../../../../data-access-types";
import * as React from "react";
import { baseFetcher } from "../../../../data-access";

export const HomeList = () => {
  const { textStyles, colors } = useTheme();
  const [topSongs, setTopSongs] = React.useState<SpotifyTrack[] | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedTerm, setSelectedTerm] = React.useState<
    "short_term" | "medium_term" | "long_term"
  >("short_term");

  const fetchTracks = React.useCallback(
    async (term: "short_term" | "medium_term" | "long_term") => {
      setIsLoading(true);
      setSelectedTerm(term);
      baseFetcher(
        `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${term}`
      ).then((response) => {
        setTopSongs(response.data.items);
        setIsLoading(false);
      });
    },
    []
  );

  React.useEffect(() => {
    fetchTracks("short_term");
  }, []);

  return (
    <Flex flexDirection="column" gap="4" width="100%" position="relative">
      <Flex flexDirection="column">
        <Text {...textStyles.h2_bold} color={colors.textPrimary}>
          Your Top Songs
        </Text>
        <Text {...textStyles.body1_400} color={colors.textSecondary}>
          In the past 4 weeks
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        overflowY="scroll"
        maxHeight="600px"
        width="100%"
        pb="150px"
      >
        <Flex gap="4" py="4">
          <Flex
            as="button"
            onClick={() => fetchTracks("short_term")}
            {...textStyles.body1_700}
            color={colors.textPrimary}
            borderRadius={8}
            borderWidth={1}
            borderColor={colors.brandGreen}
            bgColor={
              selectedTerm === "short_term" ? colors.brandGreen : undefined
            }
            p="2"
            transition="all 0.2s ease-in-out"
            _hover={{
              bgColor: colors.brandGreen,
            }}
          >
            Past 1 month
          </Flex>
          <Flex
            as="button"
            onClick={() => fetchTracks("medium_term")}
            {...textStyles.body1_700}
            color={colors.textPrimary}
            borderRadius={8}
            borderWidth={1}
            borderColor={colors.brandGreen}
            bgColor={
              selectedTerm === "medium_term" ? colors.brandGreen : undefined
            }
            p="2"
            transition="all 0.2s ease-in-out"
            _hover={{
              bgColor: colors.brandGreen,
            }}
          >
            Past 6 months
          </Flex>
          <Flex
            as="button"
            onClick={() => fetchTracks("long_term")}
            {...textStyles.body1_700}
            color={colors.textPrimary}
            borderRadius={8}
            borderWidth={1}
            borderColor={colors.brandGreen}
            bgColor={
              selectedTerm === "long_term" ? colors.brandGreen : undefined
            }
            p="2"
            transition="all 0.2s ease-in-out"
            _hover={{
              bgColor: colors.brandGreen,
            }}
          >
            Past 12 months
          </Flex>
        </Flex>
        {!isLoading ? (
          !topSongs?.length ? (
            <HomeListEmptyPlaceholder />
          ) : (
            topSongs.map((item, index) => (
              <HomeListItem
                key={item.id}
                title={`${index + 1}) ${item.artists[0].name} - ${item.name}`}
                linkUrl={item.external_urls.spotify}
              />
            ))
          )
        ) : (
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            py="16"
          >
            <Spinner color={colors.textPrimary} />
          </Flex>
        )}
      </Flex>
      <Flex
        position="absolute"
        bottom={0}
        width="100%"
        height="100px"
        bgColor={colors.brandBlack}
        boxShadow={`0px 0px 30px 50px ${colors.brandBlack}`}
      />
    </Flex>
  );
};
