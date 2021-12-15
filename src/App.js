import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import InfoBox from "./components/infobox";
import Routes from "./routes/routes";
import { ThemeProvider, StyledEngineProvider, createTheme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that access to theme
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header /> {/* <InfoBox /> */}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
