import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./main";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <IndexPage />
    </div>
  );
}

export default App;
