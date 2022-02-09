import { useEffect, useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Header } from "../parts";
import { THEME } from "../../constants";
import { changeModeAction, useAppDispatch, useAppSelector } from "../../store";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);

  useEffect(() => {
    const isDarkLocal = localStorage.getItem("isDark");
    if (isDarkLocal !== null && isDarkLocal !== `${isDark}`) {
      dispatch(changeModeAction());
      console.log("appModeLocal", isDarkLocal);
      console.log("appMode", isDark);
    }
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
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
