import { React } from "react";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Rooms";
import Meetings from "./pages/Meetings";
import Rooms from "./pages/Rooms";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/meetings">Meetings</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/meetings">
              <Meetings />
            </Route>
            <Route path="/rooms">
              <Rooms />
            </Route>
          </Switch>
        </div>
      </Router>
      <Navbar />
    </>
  );
};
