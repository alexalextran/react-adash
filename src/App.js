import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Nav from './components/Nav';
import Whyus from './components/Whyus';
import YTvideos from './components/YTvideos';
import Statistics from "./components/Statistics"
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

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
    </div>
  );
}

export default App;
