import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Accessibility from './components/accessibility/Accessibility';
// import ProgramsPage from "./pages/programs/ProgramsPage";





const Home = lazy(() => import("./pages/home/Home"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs"));
const Contact = lazy(() => import("./pages/contactus/Contact"));
const GetInvolved = lazy(() => import("./pages/getinvovled/GetInvolved"));
const Programs = lazy(() => import("./pages/programs/ProgramsPage"));


function App() {
  return (
    <Router>
      <div className="App">

        <Suspense>
          <Header />

          <Accessibility />
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/programs" element={<Programs />} />
          </Routes>
          <Footer />
        </Suspense>
        
        
      </div>
    </Router>
  );
}

export default App;
