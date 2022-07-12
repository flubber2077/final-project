import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import HighlightContainer from './Components/HighlightContainer.js';
import MusicianContainer from './Components/MusicianContainer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSong } from './features/song';
import store from './features/store';

function App() {
  let isLoaded = false;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/songs')
      .then((response) => response.json())
      .then((json) => {
        dispatch(changeSong(json));
        isLoaded = true;
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <HighlightContainer />
      <div className="main">
        <MusicianContainer />
      </div>
    </div>
  );
}

export default App;
