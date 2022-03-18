import './App.css';
import { Projects } from './pages/list/Projects.js';
import { Timeline } from './pages/timeline/Timeline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App container">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timelines">Timelines</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/timelines">
            <Timeline />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
