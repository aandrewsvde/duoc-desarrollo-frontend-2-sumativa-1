import { HashRouter } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import AppRoutes from './routes/AppRoutes';

// App solo compone el estado global y el enrutador; las rutas viven en AppRoutes
function App() {
  return (
    <InventarioProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </InventarioProvider>
  );
}

export default App;
