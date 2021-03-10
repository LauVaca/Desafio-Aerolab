import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import PerfilUsuario from './components/Header/Perfil';
import Home from './components/Home/Home';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/perfil">
              <PerfilUsuario />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
