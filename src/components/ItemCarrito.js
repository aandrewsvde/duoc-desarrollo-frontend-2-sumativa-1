import Button from './Button';
import Card from './Card';
import { formatearPrecio } from '../utils/formato';

// Fila del carrito con controles para aumentar, disminuir o eliminar
function ItemCarrito({ articulo, cantidad, onAumentar, onDisminuir, onEliminar }) {
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold">{articulo.nombre}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {articulo.marca} · {formatearPrecio(articulo.precio)} c/u · Disponible en inventario: {articulo.cantidad}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={onDisminuir} aria-label={`Disminuir ${articulo.nombre}`}>
          −
        </Button>
        <span className="w-8 text-center text-lg font-bold">{cantidad}</span>
        <Button
          variant="secondary"
          onClick={onAumentar}
          disabled={articulo.cantidad === 0}
          aria-label={`Aumentar ${articulo.nombre}`}
        >
          +
        </Button>
        <span className="w-24 text-right font-semibold">{formatearPrecio(articulo.precio * cantidad)}</span>
        <Button variant="danger" onClick={onEliminar}>
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default ItemCarrito;
