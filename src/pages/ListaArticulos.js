import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInventario } from '../context/InventarioContext';
import FiltroCategoria from '../components/FiltroCategoria';
import TablaArticulos from '../components/TablaArticulos';

function ListaArticulos() {
  const { state } = useInventario();
  // La categoría seleccionada es un estado local: solo esta pantalla la necesita
  const [categoria, setCategoria] = useState('Todas');

  const categorias = [...new Set(state.articulos.map((a) => a.tipo))].sort();

  // Lista derivada: filter crea un nuevo array, el inventario original no se modifica
  const articulosFiltrados =
    categoria === 'Todas' ? state.articulos : state.articulos.filter((a) => a.tipo === categoria);

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="page-title mb-0">Inventario</h1>
        <Link to="/inventario/agregar" className="btn btn-primary">
          + Agregar artículo
        </Link>
      </div>

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <FiltroCategoria categorias={categorias} valor={categoria} onCambiar={setCategoria} />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Mostrando {articulosFiltrados.length} de {state.articulos.length} artículos
        </p>
      </div>

      {articulosFiltrados.length > 0 ? (
        <TablaArticulos articulos={articulosFiltrados} />
      ) : (
        <p>No hay artículos en esta categoría.</p>
      )}
    </section>
  );
}

export default ListaArticulos;
