import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import "./App.css";
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<Services/>} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
          <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
