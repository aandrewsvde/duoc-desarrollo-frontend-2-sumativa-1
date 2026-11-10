import Card from '../components/Card';

const tiendas = [
  { nombre: 'Tienda Centro', direccion: 'Av. Libertador Bernardo O’Higgins 1234, Santiago', horario: 'Lun a Dom, 8:00 a 22:00' },
  { nombre: 'Tienda Providencia', direccion: 'Av. Providencia 2345, Providencia', horario: 'Lun a Dom, 8:30 a 21:30' },
  { nombre: 'Tienda Maipú', direccion: 'Av. Pajaritos 3456, Maipú', horario: 'Lun a Sáb, 9:00 a 21:00' },
];

function NuestrasTiendas() {
  return (
    <section>
      <h1 className="page-title">Nuestras tiendas</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiendas.map((tienda) => (
          <Card key={tienda.nombre}>
            <h2 className="mb-2 text-xl font-semibold">{tienda.nombre}</h2>
            <p>{tienda.direccion}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tienda.horario}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default NuestrasTiendas;
