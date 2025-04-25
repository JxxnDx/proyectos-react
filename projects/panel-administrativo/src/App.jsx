//import { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Clientes from './pages/Clientes'
import Proveedores from './pages/Proveedores'
import Usuarios from './pages/Usuarios'
import Inicio from './pages/Inicio'
import Error from './pages/Error'
import Logout from './pages/Logout'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="proveedores" element={<Proveedores />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
