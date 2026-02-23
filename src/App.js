import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load page components for better performance
const Home = lazy(() => import("./components/pages/Home"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Customers = lazy(() => import("./components/pages/Customers"));
const ContactUs = lazy(() => import("./components/ContactUs"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/aboutus" exact Component={AboutUs} />
              <Route path="/customers" exact Component={Customers} />
              <Route path="/contact" exact Component={ContactUs} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
