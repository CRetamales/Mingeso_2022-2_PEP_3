import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

//Paginas
import Home from './pages/Home'
import Index from './pages/Index'
import Pizzas from './pages/Pizzas'


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  }

  const closeCart = () => {
    setShowCart(false);
  }

  return (
    <Layout
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home cart={cart} openCart={openCart} />} />
          <Route path="/section/pizzas" element={<Pizzas />} />
        </Routes>
    </Layout>
  )
}

export default App
