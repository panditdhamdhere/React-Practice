import { useState } from 'react';
import './App.css';
import ComA from './components/ComA';
import Header from './components/Header';
import { createContext } from 'react';

const AppState = createContext();

function App() {

  const [data, setData] = useState('Pandit');

  return (
    <>

      <AppState.Provider value={data}>
        <Header />
        <ComA />
      </AppState.Provider>
    </>
  );
}

export default App;
export {AppState}
