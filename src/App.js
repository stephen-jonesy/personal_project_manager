import './App.scss';
import { Header } from './common/Header';
import { List } from './pages/list/List';
import { Timeline } from './pages/timeline/Timeline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App  d-flex">
      <Router>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col">
          <Switch>
            <Route path="/timelines">
              <Timeline />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </div>

    </Router>

    </div>
  );
}

export default App;
