import Card from '../components/Card';

function QuienesSomos() {
  return (
    <section>
      <h1 className="page-title">Quiénes somos</h1>
      <Card className="space-y-4">
        <p>
          Somos un supermercado de barrio que nació para ofrecer productos de calidad a precios justos,
          atendiendo a las familias de nuestra comunidad.
        </p>
        <p>
          <strong>Misión:</strong> entregar una experiencia de compra cercana, con un inventario siempre
          actualizado y disponible.
        </p>
        <p>
          <strong>Visión:</strong> ser el supermercado preferido de la comunidad gracias a nuestro servicio y
          variedad de productos.
        </p>
      </Card>
    </section>
  );
}

export default QuienesSomos;
