import logo from './logo.svg';
import './App.css';

function App() {
  //Hello
  //Hello
  alert("Unexpected Condition");
  const x = 42;
  await x;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut eleifend est. Phasellus nec nunc gravida, luctus sem sit amet, eleifend nulla. Pellentesque nec risus vehicula, eleifend lectus nec, sagittis velit. In quis nunc efficitur, tempus lorem vel, iaculis elit. Mauris ut accumsan elit, in maximus nulla. Vestibulum tempus nunc quis felis rhoncus imperdiet. Donec nec maximus nisl, in cras.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
