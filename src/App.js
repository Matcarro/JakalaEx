import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import the Redux store
import './App.css';
import Homepage from './pages/homepage';
import Gestione from './pages/gestione';
import AutomezzoFilialeDetails from './pages/automezzoFilialeDetails';
import Header from './components/header';
import Login from './pages/login';
import PrivateRoute from './components/privateRoute';

function App() {
  //tutte le route salvo il login sono wrappate nel componente PrivateRoute che controlla l'autenticazione
  return (
    <Provider store={store}> {/* Wrap the application in Provider */}
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <div className="App-content">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />
              <Route path="/gestione" element={<PrivateRoute><Gestione /></PrivateRoute>} />
              <Route path="/automezzo/:codice" element={<PrivateRoute><AutomezzoFilialeDetails /></PrivateRoute>} />
              <Route path="/filiale/:codice" element={<PrivateRoute><AutomezzoFilialeDetails /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

