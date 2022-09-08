
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
          <NavBar id="top"/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = 'tenista'/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/raqueta' element={<SitioWebEnConstruccion menu="Raquetas"/>}/>
            <Route path='/category/elegi' element={<SitioWebEnConstruccion menu="Como elegir"/>}/>
            <Route path='/category/contacto' element={<SitioWebEnConstruccion menu="Contacto"/>}/>
            <Route path='/category/carrito' element={<SitioWebEnConstruccion menu="Carrito"/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
