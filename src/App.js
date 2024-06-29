import React, { useEffect, useState } from 'react';
import './App.css';
import { BOOKS, Books } from './books';

function App() {

  const screen = '*';
  const [visor1Value, setVisor1Value] = useState('*');
  const [visor2Value, setVisor2Value] = useState('');
  const [visor2LastValue, setVisor2LastValue] = useState('');
  const [points, setPoints] = useState(1);
  const [retry, setRetry] = useState(1);
  const [level, setLevel] = useState(0);
  const [book, setBook] = useState(0);
  const answers = '';
  const books = new Books();
  const RETRY_MAX = 3;

  useEffect(() => {
    // document.addEventListener('keypress', handleVisor2KeyPress);

    return () => {
      // document.removeEventListener('keypress', handleVisor2KeyPress);
    }
  })

  function handleVisor2Change(event) {
    setVisor2Value(event.target.value);
  };

  function handleSetVisor2Value(value) {
    setVisor2Value(value);
    document.getElementById('visor2').value = value;
  }

  function handleVisor2OnChange(event) {
    setVisor2Value(event.target.value);
  }

  function selectAllOnFocus(event) {
    event.target.select()
  }

  /**
   * 
   * @param {number | undefined} useBook
   * @param {number | undefined} useLevel
   */
  function updateVisor1Value(useBook, useLevel) {
    console.log(`updateVisorValue`, books.books[106])
    const _book = useBook || book;
    const _level = useLevel || level;
    if (_book !== 0) {
      if (_book == 106) {
        console.log(`updateVisorValue 1`)
        const bookItem = books.books[_book][_level];
        setVisor1Value(`${_book}->${_level}|${bookItem.book}->${bookItem.level}`);
      } else {
        console.log(`updateVisorValue 2`)
        setVisor1Value(`${_book}->${_level}`);
      }
    } else {
      console.log(`updateVisorValue 3, book ${_book}`)
      setVisor1Value('*');
    }
  }

  function handleCommand(command, origin) {
    // Se for um comando do visor2
    if (origin === 'visor2') {
      // Escolhe o livro
      if (books.isBook(visor2Value)) {
        setBook(visor2Value);
        setPoints(0);
        setLevel(1);
        updateVisor1Value(visor2Value, 1);
        setVisor2Value('');
      } else {
        handleSetVisor2Value(`COMANDO INVALIDO`);
      }
    } else if (origin === 'button') {
      if (book === 0) {
        handleSetVisor2Value(`COMANDO INVALIDO`);
      } else {
        if (books.checkAnswer(book, level, command)) {
          /**
           * 1 tentativa = 3 pts, 2 tentativa = 2 pts, 3 tentativa = 1 pts
           * 4+ tentativas = 0 pts
          */
          const newPoints = retry > RETRY_MAX ? 0 : 4 - retry;
          setPoints(points + newPoints);
          setRetry(1);
          if (level === 30) {
            handleSetVisor2Value(`PONTUACAO: ${points}`);
            setLevel(0);
            setBook(0);
            updateVisor1Value(0, 0);
          } else {
            setLevel(level + 1);
            updateVisor1Value(book, level + 1);
            handleSetVisor2Value(`ACERTOU`);
            console.log(`respostaCerta, retry ${retry}, points ${points}`);

          }
        } else {
          if (retry === 1) {
            handleSetVisor2Value(`RESPOSTA ERRADA`);
          } else {
            handleSetVisor2Value(`RESPOSTA ERRADA (${retry})`);
          }
          setRetry(retry + 1);
          console.log(`respostaErrada, retry ${retry}, points ${points}`);
        }
      }
    }
  };

  function handleVisor2KeyDown(event) {
    // console.log('HandleKeyPress');
    if (['Enter'].includes(event.key)) {
      handleCommand(event.key, 'visor2');
    } else {
      // handleVisor2OnChange
    }
  };

  function restartGame() {
    setVisor1Value('*');
    setVisor2Value('');
    setBook(0);
    setLevel(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='dispositivo'>
          <div id='titulo'>Pense Bem</div>
          <form>
            <p><input type='text' id='visor1' value={visor1Value} readOnly></input></p>
            <p><input type='text' id='visor2' value={visor2Value} onChange={handleVisor2Change} onKeyDown={handleVisor2KeyDown} onFocus={selectAllOnFocus}></input></p>
            <p>
              <input type='button' id='botaoA' className='botao' value='A' onClick={() => { handleCommand('a', 'button'); }}></input>
              <input type='button' id='botaoB' className='botao' value='B' onClick={() => { handleCommand('b', 'button'); }}></input>
              <input type='button' id='botaoC' className='botao' value='C' onClick={() => { handleCommand('c', 'button'); }}></input>
              <input type='button' id='botaoD' className='botao' value='D' onClick={() => { handleCommand('d', 'button'); }}></input>
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
