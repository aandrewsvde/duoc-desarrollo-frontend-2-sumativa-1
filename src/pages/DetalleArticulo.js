import { Link, useParams } from 'react-router-dom';
import { ACTIONS, useInventario } from '../context/InventarioContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { formatearPrecio } from '../utils/formato';

function DetalleArticulo() {
  // Parámetro dinámico de la ruta /inventario/:articuloId
  const { articuloId } = useParams();
  const { state, dispatch } = useInventario();

  const articulo = state.articulos.find((a) => a.id === Number(articuloId));
  const enCarrito = state.carrito.find((item) => item.id === articulo?.id)?.cantidad ?? 0;

  if (!articulo) {
    return (
      <Card>
        <p className="mb-4">El artículo no existe.</p>
        <Link to="/inventario" className="btn btn-secondary">
          Volver al inventario
        </Link>
      </Card>
    );
  }

  const datos = [
    ['Marca', articulo.marca],
    ['Categoría', articulo.tipo],
    ['Precio', formatearPrecio(articulo.precio)],
    ['Disponible en inventario', articulo.cantidad > 0 ? `${articulo.cantidad} unidades` : 'Agotado'],
    ['En tu carrito', `${enCarrito} unidades`],
  ];

  return (
    <section className="mx-auto max-w-xl">
      <Link to="/inventario" className="mb-4 inline-block text-brand-primary hover:underline dark:text-green-400">
        ← Volver al inventario
      </Link>
      <Card>
        <h1 className="page-title">{articulo.nombre}</h1>
        <dl className="mb-6 divide-y divide-gray-200 dark:divide-gray-700">
          {datos.map(([etiqueta, valor]) => (
            <div key={etiqueta} className="flex justify-between py-2">
              <dt className="font-medium">{etiqueta}</dt>
              <dd>{valor}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => dispatch({ type: ACTIONS.AGREGAR_AL_CARRITO, payload: articulo.id })}
            disabled={articulo.cantidad === 0}
          >
            {articulo.cantidad === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </Button>
          <Link to="/carrito" className="btn btn-secondary">
            Ver carrito
          </Link>
        </div>
      </Card>
    </section>
  );
}

export default DetalleArticulo;
