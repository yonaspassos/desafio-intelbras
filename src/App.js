import Header from "./Components/Header";
import "./App.css";
import Content from "./Containers/Content";
import ProductDisclamer from "./Components/ProductDisclamer";
import SuporteBar from "./Components/SuporteBar";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Header />
        <Content />
        <ProductDisclamer />
      </div>
      <SuporteBar />
    </div>
  );
}

export default App;
