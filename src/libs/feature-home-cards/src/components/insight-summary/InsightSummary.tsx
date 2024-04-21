import { Flex, Text } from "@chakra-ui/react";
import { InsightCard } from "../insight-card";
import { useTheme } from "../../../../shared/theme";

const artistConfig = {
  title: "Bryson Tiller",
  subtitle: "Kentucky Hip Hop, R&B",
  imageUrl: "https://i.scdn.co/image/ab6761610000e5eb078fdd734b7f0aa782328428",
  linkUrl: "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
};

const songConfig = {
  title: "Don Toliver",
  subtitle: "Deep in the Water",
  imageUrl: "https://i.scdn.co/image/ab67616d0000b2734d2cd1ebcbf404732a8e2706",
  linkUrl: "https://open.spotify.com/track/2dshtwEGNpyrE0x69wUiHj",
};

export const InsightSummary = () => {
  const { textStyles, colors } = useTheme();
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
        <InsightCard {...artistConfig} />
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
        <InsightCard {...songConfig} />
      </Flex>
    </Flex>
  );
};
