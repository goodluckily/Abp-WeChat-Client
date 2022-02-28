import logo from './logo.svg';
import './App.css';
import Hellow from "./components/Hello/Hello"
import Title from './components/Title/Title';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!!
        </a>
        <Hellow />
        <Title />
      </header>
    </div>
  );
}

export default App;
