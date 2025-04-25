import { NavLink } from "react-router-dom";
import logo from '../public/logo.png'; // Adjust the path to your logo image

function Navbar() {
    return (
        <nav className="flex justify-between w-full bg-gray-900 text-white items-center">
            <img src={logo} alt="Logo" className="w-12 h-12 ml-4" />
            <ul className="flex justify-between items-center text-white p-4">
                <li><NavLink className="hover:bg-gray-700 p-2 rounded" to="/">Clientes</NavLink></li>
                <li><NavLink className="hover:bg-gray-700 p-2 rounded" to="proveedores">Proveedores</NavLink></li>
                <li><NavLink className="hover:bg-gray-700 p-2 rounded" to="Usuarios">Usuarios</NavLink></li>
            </ul>
            <button className="m-4 text-white p-2 rounded hover:bg-red-500">Cerrar Sesión</button>
        </nav>
    )
}

export default Navbar;  