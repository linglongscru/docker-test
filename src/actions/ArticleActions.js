// @flow

import { push } from 'react-router-redux'

import axios from 'axios'

export const fetch = (id: number) =>
  (dispatch: Function) =>
    axios.get('http://127.0.0.1:5000/articles/' + id)
      .then((response) => {
        dispatch({type: 'FETCH_ARTICLE_FULFILLED', payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_ARTICLE_REJECTED', payload: err})
      })

export const create = (feedId, url) =>
  (dispatch: Function) =>
    axios.post('http://127.0.0.1:5000/articles', {
      data: {
        type: 'article',
        attributes: {url},
        relationships: {
          feed: {
            data: {
              id: feedId.toString()
            }
          }
        }
      }
    })
      .then((response) => {
        dispatch(push('/articles/' + response.data.data.id))
      })
      .catch((err) => {
        dispatch({type: 'CREATE_ARTICLE_REJECTED', payload: err})
      })
