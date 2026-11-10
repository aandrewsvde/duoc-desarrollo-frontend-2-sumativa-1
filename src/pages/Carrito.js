import { Link } from 'react-router-dom';
import { ACTIONS, useInventario } from '../context/InventarioContext';
import Card from '../components/Card';
import ItemCarrito from '../components/ItemCarrito';
import { formatearPrecio } from '../utils/formato';

function Carrito() {
  const { state, dispatch } = useInventario();

  // Une cada ítem del carrito con los datos actuales del artículo en el inventario
  const items = state.carrito.map((item) => ({
    ...item,
    articulo: state.articulos.find((a) => a.id === item.id),
  }));
  const total = items.reduce((suma, item) => suma + item.articulo.precio * item.cantidad, 0);

  if (items.length === 0) {
    return (
      <section>
        <h1 className="page-title">Carrito de compras</h1>
        <Card>
          <p className="mb-4">Tu carrito está vacío.</p>
          <Link to="/inventario" className="btn btn-primary">
            Ir al inventario
          </Link>
        </Card>
      </section>
    );
  }

  return (
    <section>
      <h1 className="page-title">Carrito de compras</h1>
      <div className="space-y-4">
        {items.map(({ id, cantidad, articulo }) => (
          <ItemCarrito
            key={id}
            articulo={articulo}
            cantidad={cantidad}
            onAumentar={() => dispatch({ type: ACTIONS.AGREGAR_AL_CARRITO, payload: id })}
            onDisminuir={() => dispatch({ type: ACTIONS.QUITAR_DEL_CARRITO, payload: id })}
            onEliminar={() => dispatch({ type: ACTIONS.ELIMINAR_DEL_CARRITO, payload: id })}
          />
        ))}
      </div>
      <Card className="mt-6 flex items-center justify-between">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-2xl font-bold text-brand-primary dark:text-green-400">{formatearPrecio(total)}</span>
      </Card>
    </section>
  );
}

export default Carrito;
