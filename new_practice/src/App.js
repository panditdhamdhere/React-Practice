// import logo from './logo.svg';
import './App.css';
import Students from './components/Students';

function App() {
  // let name = "pandit"
  return (
    < div className="App" >
      <Students
        name="pandit"
        age={25}
      />
      <Students
        name="ganesh"
        age={20}
      />
      <Students
        name="mahesh"
        age={29}
      />
      <Students
        name="prakash"
        age={24}
      />
    </div >
  );
}

export default App;
