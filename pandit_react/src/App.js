import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {


  return (
    <Router>
      <>
        <Header />
        <Routes>

          {/* home */}
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </>
    </Router>
  );
}

export default App;
