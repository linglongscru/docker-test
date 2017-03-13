// @flow

import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import { history } from './store'

import App from './components/App'
import Feeds from './components/Feeds'
import Feed from './components/Feed'
import FeedEditor from './components/FeedEditor'
import Articles from './components/Articles'
import Article from './components/Article'

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="feeds">
        <IndexRoute component={Feeds} />
        <Route path=":id" component={Feed} />
        <Route path=":id/edit" component={FeedEditor} />
        <Route path=":id/articles" component={Articles} />
      </Route>
      <Route path="articles">
        <Route path=":id" component={Article} />
      </Route>
    </Route>
  </Router>
)
