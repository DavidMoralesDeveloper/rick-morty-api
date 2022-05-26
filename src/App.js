import imagerickmorty from './imagen/rick-morty.png'
import './App.css';
import {useState} from "react"
import Characters from './componets/Characters';

function App() {
  const [characters, setcharacters] = useState(null)

  const reqApi = async ()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi =await api.json()
    
    setcharacters(characterApi.results)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title' > Rick & Morty </h1>
        {characters 
        ? (<Characters characters={characters} setcharacters={setcharacters} />) 
        :
        (
          <>
          <img src={imagerickmorty} alt='Rick & Morty' className='img-home' />
        <button onClick={reqApi} className='btn-search' > Buscar personaje</button>
        </>
        )              
        }

      </header>
    </div>
  );
}

export default App;
