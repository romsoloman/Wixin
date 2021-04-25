import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.scss';
import './assets/styles/main.scss';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div>
          <Switch>
            <Route exact component={Home} path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
