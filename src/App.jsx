import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./component/HeroSection";
import Navigation from "./component/Navigation";
import Location from "./component/LocationComponent";
import Contact from "./component/ContactComponent";
import About from "./component/AboutComponent";
import Login from "./component/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" exact Component={HeroSection}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/contact" Component={Contact}></Route>
            <Route path="/location" Component={Location}></Route>
            <Route path="/login" Component={Login}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
