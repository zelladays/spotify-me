import { Flex, Image } from "@chakra-ui/react";
import * as React from "react";
import { useTheme } from "../../../../shared/theme";
import { Icons } from "../../../../shared/assets";

type InsightCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
};

export const InsightCard = React.memo(
  ({ title, subtitle, imageUrl, linkUrl }: InsightCardProps) => {
    const { textStyles, colors } = useTheme();

    return (
      <Flex
        as="a"
        href={linkUrl}
        flexDirection="column"
        p="4"
        gap="2.5"
        borderRadius={8}
        bgColor={colors.brandDarkGrey}
      >
        <Image
          src={imageUrl}
          alt={title}
          maxWidth="300px"
          maxHeight="300px"
          borderRadius={8}
          overflow="clip"
        />
        <Flex alignItems="center" justifyContent="space-between">
          <Flex flexDirection="column">
            <Flex {...textStyles.h2_bold} color={colors.textPrimary}>
              {title}
            </Flex>

            <Flex {...textStyles.body1_400} color={colors.textSecondary}>
              {subtitle}
            </Flex>
          </Flex>
          <Icons.Play />
        </Flex>
      </Flex>
    );
  }
);
