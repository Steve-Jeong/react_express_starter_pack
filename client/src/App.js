import Customers from './components/customers/customers'
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Welcome to React</h1>
      </header>
      <Customers />
    </div>
  );
}

export default App;
