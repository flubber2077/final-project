import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import HighlightContainer from './Components/HighlightContainer.js';
import { useEffect, useState } from 'react';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/songs')
        .then((response) => response.json())
        .then((json) => {
            setSongs(json);
        })
}, []);
  
  return (
    <div className="App">
      <Header/>
      <HighlightContainer/>
      <div className="main">
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>

      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      <p>a bunch of text</p>
      </div>
    </div>
  );
}

export default App;
