import { NavLink } from "react-router-dom";
import logo from '/logo.png'; 

function Navbar() {
    return (
        <nav className="flex justify-between w-full bg-gray-900 text-white items-center text-lg">
            <div className="flex items-center gap-4">
                <img src={logo} alt="Logo" className="w-12 h-12 m-4" /> 
                <h1 className="text-2xl font-bold">Panel</h1>
            </div>
            <ul className="flex justify-between items-center text-white p-4 gap-4">
                <li><NavLink className="transition-all duration-500 ease-in-out hover:bg-gray-700 hover:rounded-2xl p-2 rounded" to="/">Inicio</NavLink></li>
                <li><NavLink className="transition-all duration-500 ease-in-out hover:bg-gray-700 hover:rounded-2xl p-2 rounded" to="clientes">Clientes</NavLink></li>
                <li><NavLink className="transition-all duration-500 hover:bg-gray-700 p-2 rounded hover:rounded-2xl" to="proveedores">Proveedores</NavLink></li>
                <li><NavLink className="transition-all duration-500 hover:bg-gray-700 p-2 rounded hover:rounded-2xl" to="Usuarios">Usuarios</NavLink></li>
            </ul>
            <NavLink to="logout" className="transition-all duration-400 m-4 text-white p-2 rounded hover:bg-red-500 hover:rounded-2xl">Cerrar Sesión</NavLink>
        </nav>
    )
}

export default Navbar;  