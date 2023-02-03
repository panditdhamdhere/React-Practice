import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Mail from './components/Mail';
import Insta from './components/Insta';
import UserDetails from './components/UserDetails';
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
          <Route path='/'>
            <Route index element={<Home />} />

            <Route path="/app" element={<Home />} />
              <Route path="/app/:userId" element={<UserDetails />} />
           </Route>

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} >
            <Route index element={<Insta />} />
            <Route index path="insta" element={<Insta />} />
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
