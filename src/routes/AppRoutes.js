import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy loading: cada página se descarga solo cuando se visita su ruta
const Home = lazy(() => import('../pages/Home'));
const QuienesSomos = lazy(() => import('../pages/QuienesSomos'));
const NuestrasTiendas = lazy(() => import('../pages/NuestrasTiendas'));
const ListaArticulos = lazy(() => import('../pages/ListaArticulos'));
const AgregarArticulo = lazy(() => import('../pages/AgregarArticulo'));
const DetalleArticulo = lazy(() => import('../pages/DetalleArticulo'));
const Carrito = lazy(() => import('../pages/Carrito'));

// Archivo único de enrutamiento con rutas anidadas y parámetro dinámico
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="nuestras-tiendas" element={<NuestrasTiendas />} />
        <Route path="inventario">
          <Route index element={<ListaArticulos />} />
          <Route path="agregar" element={<AgregarArticulo />} />
          <Route path=":articuloId" element={<DetalleArticulo />} />
        </Route>
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
