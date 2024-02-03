import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";
import Customers from "./components/pages/Customers";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/aboutus" exact Component={AboutUs} />
          <Route path="/customers" exact Component={Customers} />
          <Route path="/contact" exact Component={ContactUs} />         
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
