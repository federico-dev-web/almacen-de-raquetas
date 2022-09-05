
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemDetail/>
        <ItemListContainer greeting = 'tenista'/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
