// @flow

const initialState = {
  feed: null,
  fetching: false,
  fetched: true,
  error: null
}

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'FETCH_FEED_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_FEED_FULFILLED': {
      return {...state, fetching: false, fetched: true, feed: action.payload}
    }
  }
  return state
}
