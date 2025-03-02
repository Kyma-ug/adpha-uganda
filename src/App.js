import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Accessibility from './components/accessibility/Accessibility';







const Home = lazy(() => import("./pages/home/Home"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs"));
const Contact = lazy(() => import("./pages/contactus/Contact"));
const GetInvolved = lazy(() => import("./pages/getinvovled/GetInvolved"));
const Programs = lazy(() => import("./pages/programs/ProgramsPage"));
const Reports = lazy(() => import("./pages/reports/ReportsPage"));
const Blog = lazy(() => import("./pages/blogPage/BlogPage"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Careers = lazy(() => import("./pages/careers/Careers"));
const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Testimonials = lazy(() => import("./pages/testimonialPage/TestimonialsPage"));
const TermsAndPolicies = lazy(() => import("./pages/termsAndPolicies/TermsAndPolicies"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Only run when pathname changes

  return null; // This component doesn't render anything
}



function App() {
  return (
    <Router>
      <div className="App">

        <Suspense>
          <Header />

          <Accessibility />


          <ScrollToTop />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getinvolved" element={<GetInvolved />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<TermsAndPolicies />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
          <Footer />
        </Suspense>
        
        
      </div>
    </Router>
  );
}

export default App;
