import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ReactRouterDomTest = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div>
              <h1>About</h1>
              <h2>I am Yuta</h2>
            </div>
          </Route>
          <Route path="/users">
            <div>
              <h1>Users</h1>
              <h2>I am User</h2>
            </div>
          </Route>
          <Route path="/">
            <div>
              <h1>Home</h1>
              <h2>I am home</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('react')) {
  console.log('test');
  ReactDOM.render(<ReactRouterDomTest />, document.getElementById('react'));
}