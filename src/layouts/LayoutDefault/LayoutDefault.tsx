import { ReactNode } from "react";
//import { ReactComponent as ReactLogo } from "../assets/react.svg";
//import viteLogo from "/vite.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {},
   },
});

function LayoutDefault({ children }: { children: ReactNode }) {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default LayoutDefault;
