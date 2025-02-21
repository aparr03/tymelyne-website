import logo from './logo.svg';
import './App.css';
import backgroundAudio from './background.mp3';
import { useEffect, useRef } from 'react';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tyme Lyne coming soon!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crunch Time Studios
        </a>
        <audio ref={audioRef} src={backgroundAudio} loop />
      </header>
    </div>
  );
}

export default App;
