import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
function App() {
  const [num, setNum] = useState(2)
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=20${num}&idStarts=1001`);
      const res = await get.json()
      setData(res)
      console.log(res);
    }
    getData();
  }, [num])


  return (
    <div>
      <Header />
      <button onClick={() => setNum(num + 1)}>Click me{num}</button>
{
data.map((element, index) => {
  return (
    <div className='data' key={index}>
      <h4>{element.firstName}</h4>
      <h4>{element.email}</h4>
      <h4>{element.contactNumber}</h4>
    </div>
  )
})

}
    </div>
  );
}

export default App;
