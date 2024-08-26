import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";
import generateTheme from "./generate-theme";

const AppThemeProvider = (props) => {
  const { themeMode, primaryColor, children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={generateTheme(themeMode, primaryColor)}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;
