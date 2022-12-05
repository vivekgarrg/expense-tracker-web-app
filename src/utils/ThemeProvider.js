import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6676A8",
      dark: "#1542D6",
      light: "#EAECF8",
      table:"#E2FBDB"
    },
    secondary: {
      main: "#ED6E52",
      light: "#FFF3ED",
      table: "#F5E8E1"
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F5",
        },
        h4: {
          fontSize: "2rem!important",
          fontWeight: "600!important",
        },
        h2: {
          fontSize: "2.25rem!important",
          fontWeight: "600!important",
        },
        h3: {
          fontSize: "2.125rem!important",
          fontWeight: "600!important",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default function GlobalCssOverride(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
