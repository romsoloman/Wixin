import { Route, Router, Switch } from 'react-router-dom';
import './App.scss';
import './assets/styles/main.scss';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact component={Home} path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
