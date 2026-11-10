import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';

const menuSuperior = [
  { to: '/inventario', label: 'Inventario', end: true },
  { to: '/inventario/agregar', label: 'Agregar artículo' },
  { to: '/carrito', label: 'Carrito' },
];

const menuInferior = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/quienes-somos', label: 'Quiénes somos' },
  { to: '/nuestras-tiendas', label: 'Nuestras tiendas' },
];

const claseLink = ({ isActive }) => `nav-link ${isActive ? 'bg-brand-primary-dark' : ''}`;

// Layout común: encabezado, contenido de la ruta anidada (Outlet) y menú inferior
function MainLayout() {
  const { state } = useInventario();
  const unidadesEnCarrito = state.carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <header className="bg-brand-primary text-white shadow">
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="text-xl font-bold">
            🛒 Supermercado
          </Link>
          <ul className="flex flex-wrap gap-1">
            {menuSuperior.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={claseLink}>
                  {label}
                  {to === '/carrito' && (
                    <span className="ml-2 rounded-full bg-brand-secondary px-2 text-sm text-gray-900">
                      {unidadesEnCarrito}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Suspense fallback={<p>Cargando...</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="bg-brand-primary text-white">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4 py-3">
          {menuInferior.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={claseLink}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default MainLayout;
