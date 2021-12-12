import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import InfoBox from "./components/infobox";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header /> {/* <InfoBox /> */}
    </div>
  );
}

export default App;
