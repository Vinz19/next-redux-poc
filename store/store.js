import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import todos from './todos/reducer'
import counter from './counter/reducer'

const combinedReducer = combineReducers({
  counter,
  todos,
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count
      },
      todos: {
        todos: [...new Set([...action.payload.todos.todos, ...state.todos.todos])]
      }
    }
    return nextState
  }
  else {
    return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore)