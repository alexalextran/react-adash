import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Nav from './components/Nav';
import Whyus from './components/Whyus';
import YTvideos from './components/YTvideos';
import Statistics from "./components/Statistics"

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Aboutus />
      <YTvideos />
      <Whyus />
      <Statistics />
    </div>
  );
}

export default App;
