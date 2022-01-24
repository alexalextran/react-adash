import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Nav from './components/Nav';
import Whyus from './components/Whyus';
import YTvideos from './components/YTvideos';
import Statistics from "./components/Statistics"
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
 

  return (
    <div className="App">
      <Nav />
      <Home/>
      <Aboutus />
      <YTvideos />
      <Whyus />
      <Statistics />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
