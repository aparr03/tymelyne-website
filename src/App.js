import logo from './logo.svg';
import './App.css';
import './background.mp3';

function App() {
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
        <audio src = "./background.mp3" autoPlay loop/>
      </header>
    </div>
  );
}

export default App;
