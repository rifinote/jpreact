import './App.css';
import React, {useState} from "react";

function App() {

  const [idade, setIdade] = useState(0);

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);

  }
  const [Nasci, setNasci] = useState(0);
  
  function handleClick(){

    setNasci (2022-idade);

  }
    return (
    <div className="App">

      <header className="App-header">

        <h1>Cálculo Data de Nascimento</h1> 

          <p>Digite sua idade:</p>

              <input value={idade} onChange={handleIdadeChange} />

              <br></br><button onClick={handleClick}>CALCULAR</button>

          <p>Ano do seu Nascimento (resultado)</p>

              <input value={Nasci} />

      </header>
    </div>
  );
}

export default App;
