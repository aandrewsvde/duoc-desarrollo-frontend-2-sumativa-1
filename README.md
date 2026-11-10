# Supermercado – Gestión de inventario

Sitio web en React para gestionar el inventario de un supermercado. Actividad sumativa de la semana 3 de Desarrollo Frontend II (PFY2202).

**Sitio publicado (gh-pages):** https://aandrewsvde.github.io/duoc-desarrollo-frontend-2-sumativa-1

## Funcionalidades

| Pantalla | Ruta | Descripción |
|---|---|---|
| Inicio | `/` | Bienvenida y accesos rápidos. |
| Quiénes somos / Nuestras tiendas | `/quienes-somos`, `/nuestras-tiendas` | Páginas informativas (menú inferior). |
| Inventario | `/inventario` | Tabla con todos los artículos (nombre, marca, categoría, precio y stock) y **filtro por categoría**. El filtro genera una lista derivada sin modificar el inventario original. |
| Agregar artículo | `/inventario/agregar` | Formulario con validación para ingresar artículos nuevos. |
| Detalle | `/inventario/:articuloId` | Al hacer clic en un artículo se muestra su detalle y se puede **agregar al carrito**, lo que resta una unidad del inventario. |
| Carrito | `/carrito` | Lista de artículos agregados. Los botones **+ / −** y **Eliminar** actualizan el carrito y devuelven o descuentan unidades del inventario general. |

## Tecnologías

- **React 18** (Create React App)
- **React Router 6**: archivo de rutas centralizado (`AppRoutes.js`), layout con `Outlet`, rutas anidadas, parámetro dinámico con `useParams` y carga diferida con `React.lazy` + `Suspense`. Se usa `HashRouter` para que las rutas funcionen en GitHub Pages.
- **Estado global** con `useReducer` + Context (`useContext`). Inventario y carrito comparten un único estado porque dependen entre sí; todas las actualizaciones son inmutables. El filtro de categoría usa `useState` local.
- **Tailwind CSS 3**: tema propio en `tailwind.config.js`, clases reutilizables con `@apply`, variantes `hover`/`focus`/`disabled`, modo oscuro (`dark:`), diseño responsive (`sm:`, `lg:`) y purga de clases no usadas.

## Estructura

```
src/
├── App.js                  # Proveedor de estado + router
├── routes/AppRoutes.js     # Todas las rutas (lazy loading, anidadas, dinámicas)
├── layouts/MainLayout.js   # Menú superior, Outlet y menú inferior
├── context/InventarioContext.js  # Reducer, acciones y hook useInventario
├── data/articulosIniciales.js    # Inventario inicial
├── components/             # Button, Card, FiltroCategoria, TablaArticulos, ItemCarrito
├── pages/                  # Home, QuienesSomos, NuestrasTiendas, ListaArticulos,
│                           # AgregarArticulo, DetalleArticulo, Carrito
├── utils/formato.js        # Formato de precios en CLP
└── index.css               # Directivas Tailwind y clases @apply
```

## Ejecución local

Requiere Node.js 18 o superior.

```bash
npm install
npm start
```

El sitio se abre en http://localhost:3000.

## Publicación en GitHub Pages

```bash
npm run deploy
```

Genera el build y lo publica en la rama `gh-pages`. En GitHub, en *Settings → Pages*, la fuente debe ser la rama `gh-pages`.

## Autor

Agustín Andrews – Desarrollo Frontend II (PFY2202), Duoc UC.
