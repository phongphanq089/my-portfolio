import { blue, red } from "@mui/material/colors";
import { color } from "framer-motion";

const { createTheme } = require("@mui/material");

const CustomTheme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          mobileSmall: 375,
          sm:  576,
          md: 768,
          lg: 992,
          xl: 1200,
          xxl: 1400,
        },
      },
    typography: {
         heading: {
          fontSize: 64,
          color: 'aqua',
        },
        // Disable h3 variant
      },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'dashed'},
            style: {
              backgroundColor: "#000",
              border: '1px solid #dc2626',
              color: '#ea580c'
            },
          },
        ],
      },
    },
  });
export default CustomTheme