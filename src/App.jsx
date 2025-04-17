import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import CartContainer from './components/CartContainer';
import CheckoutForm from './components/CheckoutForm';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/products/:id" element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<CheckoutForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
