// Selector de categoría; el estado lo controla el componente padre
function FiltroCategoria({ categorias, valor, onCambiar }) {
  return (
    <div className="form-field sm:w-64">
      <label htmlFor="filtro-categoria" className="font-medium">
        Filtrar por categoría
      </label>
      <select
        id="filtro-categoria"
        className="form-input"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroCategoria;
