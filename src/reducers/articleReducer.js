// @flow

const initialState = {
  article: null,
  fetching: false,
  fetched: true,
  error: null
}

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_ARTICLE_FULFILLED': {
      return {...state, fetching: false, fetched: true, article: action.payload}
    }
  }
  return state
}
