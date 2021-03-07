import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
