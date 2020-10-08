import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";

import ArticleLists from './articles/ArticleLists';
import ShowArticle from './articles/ShowArticle';

const Top = () => {
  return (
    <Router>
      <header>
        <Link to="/articles">記事一覧</Link>
      </header>
        <hr />

        <Switch>
          <Route path="/article/:id">
            <ShowArticle />
          </Route>
          <Route exact path="/articles">
            <ArticleLists />
          </Route>
          <Route>
            <Redirect to="/articles" />
          </Route>
        </Switch>
    </Router>
  );
}

if (document.getElementById('top')) {
  ReactDOM.render(<Top />, document.getElementById('top'));
}