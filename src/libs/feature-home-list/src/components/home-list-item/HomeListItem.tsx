import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../../../../shared/theme";
import * as React from "react";

type HomeListItemProps = {
  title: string;
  linkUrl: string;
};

export const HomeListItem = React.memo(
  ({ title, linkUrl }: HomeListItemProps) => {
    const { textStyles, colors } = useTheme();

    return (
      <Flex
        as="a"
        href={linkUrl}
        justifyContent="space-between"
        borderBottomColor={colors.brandGreen}
        borderBottomWidth={1}
        width="100%"
        py="4"
      >
        <Text {...textStyles.body1_400} color={colors.textPrimary}>
          {title}
        </Text>
      </Flex>
    );
  }
);
