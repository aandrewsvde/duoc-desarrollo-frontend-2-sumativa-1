import { Link, useNavigate } from 'react-router-dom';
import { formatearPrecio } from '../utils/formato';

// Tabla de artículos; cada fila lleva al detalle del artículo
function TablaArticulos({ articulos }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
      <table className="w-full min-w-[640px] bg-white text-left dark:bg-gray-800">
        <thead className="bg-brand-primary text-white">
          <tr>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Marca</th>
            <th className="px-4 py-3">Categoría</th>
            <th className="px-4 py-3 text-right">Precio</th>
            <th className="px-4 py-3 text-right">Stock</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr
              key={articulo.id}
              onClick={() => navigate(`/inventario/${articulo.id}`)}
              className="cursor-pointer border-b border-gray-200 hover:bg-green-50 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <td className="px-4 py-3 font-medium">
                <Link to={`/inventario/${articulo.id}`} className="text-brand-primary hover:underline dark:text-green-400">
                  {articulo.nombre}
                </Link>
              </td>
              <td className="px-4 py-3">{articulo.marca}</td>
              <td className="px-4 py-3">{articulo.tipo}</td>
              <td className="px-4 py-3 text-right">{formatearPrecio(articulo.precio)}</td>
              <td className="px-4 py-3 text-right">
                {articulo.cantidad > 0 ? (
                  articulo.cantidad
                ) : (
                  <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-700">Agotado</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaArticulos;
