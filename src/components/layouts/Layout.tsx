import { useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Header } from "../parts";
import { THEME } from "../../constants";
import { useAppSelector } from "../../store";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  const appMode = useAppSelector((state) => state.mode.appMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: appMode,
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [appMode]
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
