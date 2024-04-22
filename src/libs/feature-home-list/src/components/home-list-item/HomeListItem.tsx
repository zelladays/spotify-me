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
    const [selectedTextStyle, setSelectedTextStyle] = React.useState(
      textStyles.body1_400
    );

    const handleMouseEnter = React.useCallback(() => {
      setSelectedTextStyle(textStyles.body1_700);
    }, [textStyles.body1_700]);

    const handleMouseLeave = React.useCallback(() => {
      setSelectedTextStyle(textStyles.body1_400);
    }, [textStyles.body1_400]);

    return (
      <Flex
        as="a"
        href={linkUrl}
        justifyContent="space-between"
        borderBottomColor={colors.brandGreen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        borderBottomWidth={1}
        width="100%"
        py="4"
        transition="0.4s ease"
        _hover={{
          bgColor: colors.brandGreen,
          pl: "8",
        }}
      >
        <Text {...selectedTextStyle} color={colors.textPrimary}>
          {title}
        </Text>
      </Flex>
    );
  }
);
