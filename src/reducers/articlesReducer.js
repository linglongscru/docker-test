// @flow

const initialState = {
  articles: [],
  fetching: false,
  fetched: false,
  error: null
}

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_ARTICLES_FULFILLED': {
      return {...state, fetching: false, fetched: true, articles: action.payload}
    }
  }
  return state
}
