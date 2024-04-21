import { themeValues } from "./theme";
import { useTheme as useChakraTheme } from "@chakra-ui/react";

export const useTheme = (): typeof themeValues => {
  return useChakraTheme();
};
