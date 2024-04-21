import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./textStyles";
import { colors } from "./colors";

const themeValues = {
  colors,
  textStyles,
};

const theme = extendTheme({
  colors,
  textStyles,
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export { theme, themeValues };
