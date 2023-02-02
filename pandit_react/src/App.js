import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Mail from './components/Mail';
import Insta from './components/Insta';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {


  return (
    <Router>
      <div>
        <Header />
        <Routes>

          {/* home */}
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} >
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />

          </Route>

          {/* error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
