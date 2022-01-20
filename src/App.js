import './App.css';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Aboutus />
    </div>
  );
}

export default App;
