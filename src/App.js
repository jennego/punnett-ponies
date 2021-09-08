import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import InfoBox from "./components/infobox";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <InfoBox /> */}
      <IndexPage />
    </div>
  );
}

export default App;
