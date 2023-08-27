import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "&::-webkit-scrollbar": {
        WebkitAppearance: "none",
        width: "5px",
        backgroundColor: "blackAlpha.800",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "5px",
        backgroundColor: "blue.600",
        WebkitBoxShadow: "0 0 1px whiteAlpha.500",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        borderRadius: "5px",
        opacity: 0.5,
      },
    },
  },
});

export default theme;
