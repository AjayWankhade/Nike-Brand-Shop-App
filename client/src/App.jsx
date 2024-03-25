import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HeroSection from "./component/HeroSection";
import Navigation from "./component/Navigation";
import Location from "./component/LocationComponent";
import Contact from "./component/ContactComponent";
import About from "./component/AboutComponent";
import Login from "./component/LoginComponent";
import Register from "./component/RegisterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <ToastContainer /> {/* Add ToastContainer here */}
          <Routes>
            <Route path="/" exact element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
