import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

//Paginas
import Home from './pages/Home'
import Index from './pages/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </Layout>
  )
}

export default App
