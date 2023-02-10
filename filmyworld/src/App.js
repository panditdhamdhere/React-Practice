import Cards from "./components/Cards";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Addmovie from "./components/Addmovie";
import Detail from "./components/Detail";
import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Signin from "./components/Signin";

const Appstate = createContext ();


function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState('');


  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
    <div className="App relative">
      <Header />
      <Routes>
       <Route path="/" element={<Cards/>}/>
       <Route path="/addmovie" element={<Addmovie />} />
       <Route path="/detail/:id" element={<Detail />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};