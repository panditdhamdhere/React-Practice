import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Usefetch from './components/Usefetch';


function App() {
const [data] = Usefetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const call = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");

  //     const res = await call.json();
  //     console.log(res);
  //     setData(res);

  //   }
  //   getData();
  // }, [])

  return (
    <>
      <Header />
      {data.map((e, i) => {
        return <h3 key={i}>{e.lasttName}</h3>
      })
      }
    </>
  );
}

export default App;

