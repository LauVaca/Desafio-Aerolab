import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import PerfilUsuario from './components/Profile/Perfil';
import PerfilHome from './components/Profile/Perfil-home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/perfil">
              <PerfilHome />
            </Route>
            <Route exact path="/perfilusuario">
              <PerfilUsuario />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
