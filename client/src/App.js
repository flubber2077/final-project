import './App.css';
import Header from './Components/Header.js';
import HighlightContainer from './Components/HighlightContainer.js';
import MusicianContainer from './Components/MusicianContainer'
import MusicianEntry from './Components/MusicianEntry';
import EmailSubmit from './Components/EmailSubmit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSong } from './features/song';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/songs')
      .then((response) => response.json())
      .then((json) => {
        dispatch(changeSong(json));
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <HighlightContainer />
      <div className="main">
        <MusicianContainer />
        <MusicianEntry />
        <EmailSubmit />
      </div>
    </div>
  );
}

export default App;
