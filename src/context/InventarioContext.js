import { createContext, useContext, useReducer } from 'react';
import articulosIniciales from '../data/articulosIniciales';

// Tipos de acción del reducer (evita errores tipográficos)
export const ACTIONS = {
  AGREGAR_ARTICULO: 'AGREGAR_ARTICULO',
  AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
  QUITAR_DEL_CARRITO: 'QUITAR_DEL_CARRITO',
  ELIMINAR_DEL_CARRITO: 'ELIMINAR_DEL_CARRITO',
};

// Inventario y carrito dependen entre sí, por eso viven en un único estado
const estadoInicial = {
  articulos: articulosIniciales,
  carrito: [], // [{ id, cantidad }]
};

// Devuelve un nuevo array de artículos con el stock de uno modificado (inmutable)
const cambiarStock = (articulos, id, diferencia) =>
  articulos.map((a) => (a.id === id ? { ...a, cantidad: a.cantidad + diferencia } : a));

function inventarioReducer(state, action) {
  switch (action.type) {
    case ACTIONS.AGREGAR_ARTICULO:
      return {
        ...state,
        articulos: [...state.articulos, { ...action.payload, id: Date.now() }],
      };

    case ACTIONS.AGREGAR_AL_CARRITO: {
      const id = action.payload;
      const articulo = state.articulos.find((a) => a.id === id);
      if (!articulo || articulo.cantidad === 0) return state; // sin stock disponible

      const enCarrito = state.carrito.some((item) => item.id === id);
      return {
        articulos: cambiarStock(state.articulos, id, -1),
        carrito: enCarrito
          ? state.carrito.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item))
          : [...state.carrito, { id, cantidad: 1 }],
      };
    }

    case ACTIONS.QUITAR_DEL_CARRITO: {
      const id = action.payload;
      if (!state.carrito.some((item) => item.id === id)) return state;
      return {
        articulos: cambiarStock(state.articulos, id, 1),
        carrito: state.carrito
          .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item))
          .filter((item) => item.cantidad > 0),
      };
    }

    case ACTIONS.ELIMINAR_DEL_CARRITO: {
      const id = action.payload;
      const item = state.carrito.find((i) => i.id === id);
      if (!item) return state;
      return {
        articulos: cambiarStock(state.articulos, id, item.cantidad),
        carrito: state.carrito.filter((i) => i.id !== id),
      };
    }

    default:
      return state;
  }
}

const InventarioContext = createContext(null);

export function InventarioProvider({ children }) {
  const [state, dispatch] = useReducer(inventarioReducer, estadoInicial);
  return <InventarioContext.Provider value={{ state, dispatch }}>{children}</InventarioContext.Provider>;
}

// Hook personalizado para consumir el estado global desde cualquier componente
export function useInventario() {
  return useContext(InventarioContext);
}
