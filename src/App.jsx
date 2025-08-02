import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';  // Importa como named export

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;