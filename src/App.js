import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='dispositivo'>
          <div id='titulo'>Pense Bem</div>
          <form>
            <p><input type='text' id='visor1' value='*' readonly></input></p>
            <p><input type='text' id='visor2' readonly></input></p>

            <p>
              <input type='button' id='botaoA' className='botao' value='A'></input>
              <input type='button' id='botaoB' className='botao' value='B'></input>
              <input type='button' id='botaoC' className='botao' value='C'></input>
              <input type='button' id='botaoD' className='botao' value='D'></input>
            </p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
