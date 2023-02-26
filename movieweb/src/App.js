import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movies.json'

function App() {

  let login = false;



  return (
    <div className="App">

      {
        login == false ? <h1 style={{color:'black'}}>Pandit dada ja rey</h1> :
        <h2>Aaahhh theek hai</h2>

      }
      <Header />
      <div className="main">
        {
          movies.map((element, index) => {
            return (<Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />)

          })
        }
      </div>
    </div>
  );
}

export default App;
