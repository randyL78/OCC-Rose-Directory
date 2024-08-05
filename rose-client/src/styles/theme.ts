import {createTheme} from "@mui/material";

const theme = createTheme()

theme.typography.h1 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
    fontWeight: "100",
  },
}

export default theme
