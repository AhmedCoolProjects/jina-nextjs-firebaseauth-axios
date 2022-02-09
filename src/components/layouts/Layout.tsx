import { useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Header } from "../parts";
import { THEME } from "../../constants";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: true ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
