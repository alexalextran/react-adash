import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Videos from "./Pages/Videos";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        <Routes>
          
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/videos" element={<Videos />} />
        </Routes>
     
        <Footer />
      </div>
    </Router>
  );
}

export default App;
