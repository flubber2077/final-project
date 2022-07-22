import './App.css';
import Header from './Components/Header.js';
import MainPage from './Components/MainPage';
import About from './Components/About';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSong } from './features/song';
import { Route, Routes, NavLink } from 'react-router-dom';

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

      <Routes>
        <Route path='/'/>
        <Route path='/about' element={<About />} />
      </Routes>
      <MainPage />

    </div>
  );
}

export default App;
