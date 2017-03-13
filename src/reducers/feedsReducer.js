// @flow

const initialState = {
  feeds: [],
  fetching: false,
  fetched: false,
  error: null
}

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case 'FETCH_FEEDS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_FEEDS_FULFILLED': {
      return {...state, fetching: false, fetched: true, feeds: action.payload}
    }
  }
  return state
}
