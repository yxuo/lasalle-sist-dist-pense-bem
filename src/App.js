import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const screen = '*';
  const [visor1Value, setVisor1Value] = useState('101->1');
  const [visor2Value, setVisor2Value] = useState('');
  const [visor2LastValue, setVisor2LastValue] = useState('');
  const [retry, setRetry] = useState(1);
  const [level, setLevel] = useState(1);
  const answers = ''
  const BOOKS = {
    '101': 'adbccbddcaadbcdcdababbcdacacda',
    '102': 'babbcdddbdacabdcaabcaabadbbbcd',
    '103': 'cdddacaacbaacadddbbcadcadccdba',
    '104': 'bcadcddccdbaadadacbbddbdddaabd',
    '105': 'ccddccdacdacbbadddbdbcccabaddd',
    '106': () => Object.entries(BOOKS)
      .filter(i => i != '106')
      .reduce((l, [k, v]) => {
        
      }),
  };
  const RETRY_MAX = 3;

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    }
  })

  function handleInputChange(event) {
    setVisor2Value(event.target.value);
  };

  function handleCommand(command) {
    if (screen === 'menu') {
      if (visor2Value === '101') {
        screen = '101->1';
        setVisor1Value('101->1');
      }
    }
  };
  function handleKeyPress(event) {
    console.log(event.key);
    if ('abcd'.includes(event.key)) {
      handleCommand(event.key);
    }
  };

  function restartGame() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='dispositivo'>
          <div id='titulo'>Pense Bem</div>
          <form>
            <p><input type='text' id='visor1' value={visor1Value} readOnly></input></p>
            <p><input type='text' id='visor2' readOnly></input></p>
            <p>
              <input type='button' id='botaoA' className='botao' value='A'></input>
              <input type='button' id='botaoB' className='botao' value='B'></input>
              <input type='button' id='botaoC' className='botao' value='C'></input>
              <input type='button' id='botaoD' className='botao' value='D'></input>
            </p>
            <p>
              <input type='button' className='button-sm' value='Reiniciar jogo' onClick={restartGame}></input>
            </p>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
