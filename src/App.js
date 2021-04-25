import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import './assets/styles/main.scss';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { Home } from './pages/Home/Home';
import { TemplateApp } from "./pages/TemplateApp/TemplateApp";
import { TemplateEditor } from "./pages/TemplateEditor/TemplateEditor";

function App() {
  return (
    <div className="main-container app">
      <Router>
        <AppHeader />
        <div>
          <Switch>
            {/* <Route component={Home} path="/"></Route> */}
            <Route component={TemplateEditor} path="/editor"></Route>
            <Route component={TemplateApp} path="/templates"></Route>
            <Route exact component={Home} path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
