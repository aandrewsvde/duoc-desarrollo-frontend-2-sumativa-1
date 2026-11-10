import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACTIONS, useInventario } from '../context/InventarioContext';
import Button from '../components/Button';
import Card from '../components/Card';

const formularioVacio = { nombre: '', marca: '', tipo: '', precio: '', cantidad: '' };

function AgregarArticulo() {
  const { state, dispatch } = useInventario();
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState(formularioVacio);
  const [error, setError] = useState('');

  const categorias = [...new Set(state.articulos.map((a) => a.tipo))];

  const handleChange = (e) => {
    // Copia del objeto para mantener la inmutabilidad del estado
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const precio = Number(formulario.precio);
    const cantidad = Number(formulario.cantidad);

    if (!formulario.nombre.trim() || !formulario.marca.trim() || !formulario.tipo.trim()) {
      setError('Completa nombre, marca y categoría.');
      return;
    }
    if (!(precio > 0) || !Number.isInteger(cantidad) || cantidad < 0) {
      setError('El precio debe ser mayor a 0 y la cantidad un entero mayor o igual a 0.');
      return;
    }

    dispatch({
      type: ACTIONS.AGREGAR_ARTICULO,
      payload: {
        nombre: formulario.nombre.trim(),
        marca: formulario.marca.trim(),
        tipo: formulario.tipo.trim(),
        precio,
        cantidad,
      },
    });
    navigate('/inventario');
  };

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="page-title">Agregar artículo</h1>
      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4" noValidate>
          <div className="form-field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" className="form-input" value={formulario.nombre} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="marca">Marca</label>
            <input id="marca" name="marca" className="form-input" value={formulario.marca} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="tipo">Categoría (tipo de producto)</label>
            <input
              id="tipo"
              name="tipo"
              list="lista-categorias"
              className="form-input"
              value={formulario.tipo}
              onChange={handleChange}
            />
            <datalist id="lista-categorias">
              {categorias.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="form-field">
              <label htmlFor="precio">Precio (CLP)</label>
              <input id="precio" name="precio" type="number" min="1" className="form-input" value={formulario.precio} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="cantidad">Cantidad en stock</label>
              <input id="cantidad" name="cantidad" type="number" min="0" step="1" className="form-input" value={formulario.cantidad} onChange={handleChange} />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <Button type="submit">Guardar</Button>
            <Button variant="secondary" onClick={() => navigate('/inventario')}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default AgregarArticulo;
