import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  return (
    <Router>
      <>
        <Header />
        <Switch>
          {/* home */}
          <Route path="/home">
            <Home />
          </Route>
          {/* About */}
          <Route path="/about">
            <About />
          </Route>
          {/* Contact */}
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
