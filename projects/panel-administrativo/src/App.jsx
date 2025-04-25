//import { useState } from 'react'
import {Route, Routes, NavLink, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Clientes from './pages/Clientes'
import Proveedores from './pages/Proveedores'
import Usuarios from './pages/Usuarios'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="proveedores" element={<Proveedores />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
