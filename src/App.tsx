import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/Header";
import usePersistedState from "./hooks/usePersistedState";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [currentTheme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    light
  );

  const toggleTheme = () => {
    setTheme(currentTheme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <GlobalStyles />
        <header></header>
        <body>
          <Header toggleTheme={toggleTheme} />
          <div>testando</div>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
