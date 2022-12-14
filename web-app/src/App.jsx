import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

//Paginas
import Home from './pages/Home'
import Index from './pages/Index'
import Pizzas from './pages/Pizzas'
import Checkout from './pages/Checkout'
import Bebidas from './pages/Bebidas'
import Extras from './pages/Extras'


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  }

  const closeCart = () => {
    setShowCart(false);
  }

  const addToCart = (order) => {

    //Se chequea si el producto ya esta en el carrito
    // - tamaño
    // - tipo de masa
    // existe en el carrito
    // si existe, se agrega la cantidad
    // si no existe, se agrega el producto al carrito
    let cartIndex = cart.findIndex(item => (
      item.id === order.id
      && item.size === order.size
      && item.typemass === order.typemass
    ));
    let item = cart[cartIndex];

    if (item) {
      item.qty += order.qty;
      item.price += order.price;
      setCart(cart);
    } else {
      setCart([...cart, order]);
    }
      
  };

  return (
    <Layout
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
        <Routes>
          <Route path="/" element={<Index />} exact /> 
          <Route path="/home" element={<Home openCart={openCart} cart={cart} />} exact />
          <Route path="/section/pizzas" element={<Pizzas openCart={openCart} cart={cart} addToCart={addToCart} />} exact />
          <Route path="/section/bebidas" element={<Bebidas openCart={openCart} cart={cart} addToCart={addToCart} />} exact />
          <Route path="/section/extras" element={<Extras openCart={openCart} cart={cart} addToCart={addToCart} />} exact />
          <Route path= '/checkout' element={<Checkout openCart={openCart} cart={cart} />} exact />
        </Routes>
    </Layout>
  )
}

export default App
