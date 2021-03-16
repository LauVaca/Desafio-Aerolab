import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import PerfilUsuario from './components/Profile/Perfil';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <PerfilUsuario />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
