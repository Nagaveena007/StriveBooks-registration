import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import FooterPart from "./components/FooterPart";
import JumbotronPart from "./components/JumbotronPart";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import scifi from "./data/scifi.json";
import Registration from "./components/Registration";

import Demo from "./components/Demo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <JumbotronPart />
        <WarningSign text="Welcome to " />
        <Routes>
          {/*  <MyBadge text="Strive Books" color="warning" /> */}
          {/*  <SingleBook singlebook={scifi[0]} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="/demo" element={<Demo />} />
        </Routes>
        <FooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
