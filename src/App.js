import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting = 'tenista'/>
      </main>
    </div>
  );
}

export default App;
