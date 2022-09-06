
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import SitioWebEnConstruccion from './components/SitioWebEnConstruccion';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = 'tenista'/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/raquetas' element={<SitioWebEnConstruccion/>}/>
            <Route path='/elegi' element={<SitioWebEnConstruccion/>}/>
            <Route path='/contacto' element={<SitioWebEnConstruccion/>}/>
            <Route path='/carrito' element={<SitioWebEnConstruccion/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
