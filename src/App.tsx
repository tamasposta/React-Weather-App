import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { theme } from "./utils/themes";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="mainContainer">
        <GlobalStyles />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
