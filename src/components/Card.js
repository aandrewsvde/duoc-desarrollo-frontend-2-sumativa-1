// Contenedor reutilizable con el estilo de tarjeta del sitio
function Card({ className = '', children }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default Card;
