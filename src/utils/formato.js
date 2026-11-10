// Formatea un número como pesos chilenos
export const formatearPrecio = (valor) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
