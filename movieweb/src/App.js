import './App.css';
import Header from './components/Header';
// import Movie from './components/Movie';
// import movies from './movies.json'
import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [plus, setPlus] = useState(1)

// function inc (m) {
// setNum(num + m);
// }

// function dec (m) {
//   setNum(num - m);
//   }
  
function pan () {
  setPlus(plus * 2)
}

function dev () {
  setPlus(plus + 2)
}


  return (
    <div className="App">
      <Header />

      {/* <div className='main'>
        <h1 className='heading'>{num}</h1>
        <div className='buttons'>
          <button className='btn' onClick={() => inc(1)}>Increment</button>
          <button className='btn' onClick={() => dec(1)}>Decrement</button>
        </div> */}

      {/* </div> */}

      <div className='new'>
        <h1>{plus}</h1>
        <button onClick={pan}>mul</button>
        <button onClick={dev}>plus</button>
      </div>
    </div>


  );
}

export default App;
