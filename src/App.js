
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import SitioWebEnConstruccion from './components/SitioWebEnConstruccion';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ProbandoFirebase from './components/ProbandoFirebase';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar id="top"/>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting = 'tenista'/>}/>
              <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/elegi' element={<SitioWebEnConstruccion menu="Como elegir"/>}/>
              <Route path='/contacto' element={<SitioWebEnConstruccion menu="Contacto"/>}/>

              <Route path='/firebase' element={<ProbandoFirebase/>}/>

              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
