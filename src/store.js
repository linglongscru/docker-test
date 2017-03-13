// @flow

import { createStore, applyMiddleware } from 'redux'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import reducer from './reducers'

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(reducer, applyMiddleware(
  routerMiddleware(hashHistory),
  thunk,
  createLogger()
))

export const history = syncHistoryWithStore(hashHistory, store)
