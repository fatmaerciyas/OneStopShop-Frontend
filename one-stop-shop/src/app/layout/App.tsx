import { ThemeProvider } from "@emotion/react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
