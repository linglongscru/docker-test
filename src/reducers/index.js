// @flow

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import feeds from './feedsReducer'
import feed from './feedReducer'
import articles from './articlesReducer'
import article from './articleReducer'

export default combineReducers({
  routing: routerReducer,
  feeds,
  feed,
  articles,
  article
})
