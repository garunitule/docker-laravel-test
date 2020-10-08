import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ArticleLists from './articles/ArticleLists';
import ShowArticle from './articles/ShowArticle';

const Top = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">一覧</Link>
            </li>
            <li>
              <Link to="/articles">一覧</Link>
            </li>
            <li>
              <Link to="/article">詳細</Link>
            </li>
          </ul>
        </nav>
        <hr />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articles">
            <ArticleLists />
          </Route>
          <Route path="/article">
            <ShowArticle />
          </Route>
          <Route>
            <ArticleLists />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

if (document.getElementById('top')) {
  ReactDOM.render(<Top />, document.getElementById('top'));
}