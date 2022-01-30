import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Videos from "./Pages/Videos";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
