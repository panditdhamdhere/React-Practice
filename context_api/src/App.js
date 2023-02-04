import { useState } from 'react';
import './App.css';
import ComA from './components/ComA';
import Header from './components/Header';

function App() {

const [data, setData] = useState('Pandit');

  return (
   <>
   <Header />
   <ComA data={data} />
   
   </>
  );
}

export default App;
