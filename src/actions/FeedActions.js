// @flow

import { push } from 'react-router-redux'

import axios from 'axios'

export const fetch = (id: number) =>
  (dispatch: Function) =>
    axios.get('http://127.0.0.1:5000/feeds/' + id)
      .then((response) => {
        dispatch({type: 'FETCH_FEED_FULFILLED', payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_FEED_REJECTED', payload: err})
      })

export const create = (name) =>
  (dispatch: Function) =>
    axios.post('http://127.0.0.1:5000/feeds', {
      data: {
        type: 'feed',
        attributes: {name}
      }
    })
      .then((response) => {
        dispatch(push('/feeds/' + response.data.data.id))
      })
      .catch((err) => {
        dispatch({type: 'CREATE_FEED_REJECTED', payload: err})
      })

export const update = (id, name) =>
  (dispatch) =>
    axios.patch('http://127.0.0.1:5000/feeds/' + id, {
      data: {
        id: id.toString(),
        type: 'feed',
        attributes: {name}
      }
    })
      .then((response) => {
        dispatch(push('/feeds/' + id))
      })
      .catch((err) => {
        dispatch({type: 'UPDATE_FEED_REJECTED', payload: err})
      })

export const destroy = (id) =>
  (dispatch) =>
    axios.delete('http://127.0.0.1:5000/feeds/' + id)
      .then((response) => {
        dispatch(push('/feeds'))
      })
      .catch((err) => {
        dispatch({type: 'DESTROY_FEED_REJECTED', payload: err})
      })
