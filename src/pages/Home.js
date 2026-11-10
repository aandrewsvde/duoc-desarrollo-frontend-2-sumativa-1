import { Link } from 'react-router-dom';
import Card from '../components/Card';

const accesos = [
  { to: '/inventario', titulo: 'Inventario', texto: 'Revisa y filtra los artículos disponibles.' },
  { to: '/inventario/agregar', titulo: 'Agregar artículo', texto: 'Ingresa nuevos productos al inventario.' },
  { to: '/carrito', titulo: 'Carrito', texto: 'Gestiona los artículos que vas a comprar.' },
];

function Home() {
  return (
    <section>
      <h1 className="page-title">Bienvenido al sistema de inventario</h1>
      <p className="mb-8">Administra los productos del supermercado de forma simple y rápida.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {accesos.map(({ to, titulo, texto }) => (
          <Link key={to} to={to} className="transition hover:-translate-y-1">
            <Card className="h-full">
              <h2 className="mb-2 text-xl font-semibold text-brand-primary dark:text-green-400">{titulo}</h2>
              <p>{texto}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
