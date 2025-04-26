# Panel administrativo

Implementación de react-router-dom para crear un Navbar simulando panel administrativo simple.

## Estructura
```bash
├── public
├── src
│   ├── pages
│   │   ├── Clientes.jsx
│   │   ├── Error.jsx
│   │   ├── Inicio.jsx
│   │   ├── Logout.jsx
│   │   ├── Proveedores.jsx
│   │   ├── Usuarios.jsx
│   ├── App.jsx
│   ├── Navbar.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── ...otros archivos de configuración
```

### Descripción 
Este proyecto fue creado con Vite + React y tailwindcss para los estilos. Para iniciarlo, se ejecutó el siguiente comando:

```bash
vite@latest
```
Durante la instalación se seleccionó React y posteriormente JavaScript + SWC.

Una vez creado el proyecto, se instaló tailwindcss y se procedió a construir los distintos componentes del panel administrativo. A continuación se describen los principales archivos:

#### src
- `Navbar.jsx`: Renderiza la barra de navegación de la página en general, que contiene los enlaces a las diferentes vistas, se utiliza NavLink para redirigir según la ruta y manejar estado activo.
- `App.jsx`: Se configuró con <BrowserRouter>, <Routes> y <Route> para gestionar las rutas hacia las vistas dentro de pages, y se renderiza el Navbar.
- `main.jsx`:  Archivo principal que inicializa la aplicación y renderiza App.jsx.

#### Pages
- `Clientes.jsx`: Vista correspondiente al módulo de Clientes.
- `Error.jsx`: Vista de error que se muestra cuando se accede a una ruta no definida.
- `Inicio.jsx`: Vista inicial del panel de administración.
- `Logout.jsx`: Vista que simula el cierre de sesión.
- `Proveedores.jsx`: Vista correspondiente al módulo de Proveedores.
- `Usuarios.jsx`: Vista correspondiente al módulo de Usuarios.

Por último, se utilizó el archivo `index.html` para agregar el script que inicia la aplicación a través de `main.jsx`, el cual se encarga de renderizar los componentes principales. Además, en la carpeta `public` se incluyó un archivo que contiene el logo utilizado en la barra de navegación.

A continuación, se presentan algunas imágenes del panel de administración, donde se muestran las diferentes vistas renderizadas:


**Inicio**
![inicio](https://github.com/user-attachments/assets/f2a65d06-2e18-4407-8774-d166d59acdf5)


**Clientes**
![clientes](https://github.com/user-attachments/assets/269c3e90-0786-4469-8df1-4816a06a1175)


**Proveedores**
![proveedores](https://github.com/user-attachments/assets/d1d7778e-2942-48cc-8b6a-b15048248db7)


**Usuarios**
![usuarios](https://github.com/user-attachments/assets/8ab00738-8c49-405f-b76b-3c16d024d151)


**logout**
![logout](https://github.com/user-attachments/assets/95356d17-bab7-4d0e-bd57-b4b30fe153c1)


**Página de error**
![error](https://github.com/user-attachments/assets/2d3bef2f-8482-45b2-98d9-6fb19a3b5dad)


