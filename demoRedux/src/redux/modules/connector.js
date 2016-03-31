/* @flow */
import superagent from 'superagent'
import config from 'config'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_FROM_REMOTE = 'LOAD_FROM_REMOTE'
export const LIST_LOADED = 'LIST_LOADED'
export const COUNTER_LOADED = 'COUNTER_LOADED'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const APPLY_QUERY = 'APPLY_QUERY'
export const REMOVE_FROM_QUERY = 'REMOVE_FROM_QUERY'
export const START_LOADING = 'LOAD_START'
// ------------------------------------
// Actions
// ------------------------------------
// NOTE: 'Action' is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function didReceiveFromRemote (data) {
  return {
    type: LOAD_FROM_REMOTE,
    payload: data
  }
}

export function changeCounter (name, payload) {
  return {
    type: COUNTER_LOADED,
    name,
    payload
  }
}

export function changeList (list, data) {
  return {
    type: LIST_LOADED,
    list,
    data
  }
}

export function clearSearch () {
  return {
    type: CLEAR_SEARCH
  }
}

export function applyQuery (filterId, label, filterValue) {
  return {
    type: APPLY_QUERY,
    filterId,
    label,
    filterValue
  }
}

export function removeFromQuery (index) {
  return {
    type: REMOVE_FROM_QUERY,
    index
  }
}

export function startLoading () {
  return {
    type: START_LOADING
  }
}

function buildQuery (state) {
  if (state.connector.query === undefined) return {}
  return state.connector.query.map((elem) => {
    return { match: { [elem.id]: elem.value } }
  })
}

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const loadResults = (start, size) => {
  return (dispatch, getState): Promise => {
    return new Promise((resolve, reject) => {
      dispatch(startLoading())
      const query = buildQuery(getState())
      const queryBase = {
        ...config.queryConfig.baseQuery,
        size: size,
        from: start
      }
      if (Object.keys(query).length > 0) {
        queryBase.query = {
          bool: {
            must: [
              ...query
            ]
          }
        }
      }
      superagent.post(config.queryConfig.restEndpoint)
        .send(queryBase)
        .set('Accept', 'application/json')
        .set('Authorization', config.queryConfig.auth)
        .end((err, res) => {
          if (err) {
            reject()
            return
          }
          const data = res.body
          dispatch(changeCounter('total', data.hits.total))
          if (data.aggregations.router_names.router_id) {
            dispatch(changeList('routers', data.aggregations.router_names.router_id.router_id.buckets))
          }
          setTimeout(() => {
            dispatch(didReceiveFromRemote(data.hits.hits))
            resolve()
          }, 900)

          // Calling the end function will send the request
        })
    })
  }
}

export const actions = {
  changeCounter,
  changeList,
  didReceiveFromRemote,
  loadResults,
  clearSearch,
  applyQuery,
  startLoading,
  removeFromQuery
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_FROM_REMOTE]:
    (state, action) => ({ ...state, loading: false, searchResults: action.payload }),
  [START_LOADING]:
    (state, action) => ({ ...state, loading: true }),
  [COUNTER_LOADED]:
    (state, action) => ({ ...state, counters: { [ action.name ]: action.payload } }),
  [APPLY_QUERY]:
    (state, action) => ({ ...state, query: [...state.query,
      {label: action.label, id: action.filterId, value: action.filterValue}] }),
  [REMOVE_FROM_QUERY]:
    (state, action) => {
      const query = [...state.query]
      query.splice(action.index, 1)
      return {
        ...state,
        query: query
      }
    },
  [CLEAR_SEARCH]:
    () => (initialState),
  [LIST_LOADED]:
    (state, action) => ({ ...state, lists: { [ action.list ]: action.data } })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  counters: { total: 0 },
  query: [],
  lists: {},
  loading: false,
  searchResults: []
}
export default function connectorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
