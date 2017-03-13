// @flow

import axios from 'axios'

export const fetch = () =>
  (dispatch: Function) =>
    axios.get('http://127.0.0.1:5000/articles')
      .then((response) => {
        dispatch({type: 'FETCH_ARTICLES_FULFILLED', payload: response.data.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
      })
