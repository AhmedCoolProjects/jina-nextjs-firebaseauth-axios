import { useEffect, useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Header } from "../parts";
import { IMAGES, THEME } from "../../constants";
import {
  changeModeAction,
  loginAction,
  logoutAction,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.mode.isDark);
  // for localstorage theming
  useEffect(() => {
    const isDarkLocal = localStorage.getItem("isDark");
    if (isDarkLocal !== null && isDarkLocal !== `${isDark}`) {
      dispatch(changeModeAction());
      console.log("appModeLocal", isDarkLocal);
      console.log("appMode", isDark);
    }
  });
  // check if the user is connected
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user_local) => {
      if (user_local) {
        localStorage.setItem("userExist", "true");
        dispatch(
          loginAction({
            email: user_local.email || "",
            photoURL: user_local.photoURL || IMAGES.yanni,
            name: user_local.displayName || "",
          })
        );
      } else {
        dispatch(logoutAction());
        localStorage.setItem("userExist", "false");
      }
    });
    return unsubscribe; // unsubscribe on unmount
  }, [dispatch]);
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
