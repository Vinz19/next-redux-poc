import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos/reducer';
import counter from './counter/reducer';

const combineReducer = combineReducers({
    todos,
    counter,
});

const mainReducer = (state, action) => {
    if(action.type === HYDRATE) {
        const newState = {
            counter: {
                count: state.counter.count + action.payload.counter.count
              },
            todos:{ 
                todos: [...new Set([...action.payload.todos.todos, ...state.todos.todos])]
            }
        }
        return newState
    } else {
        return combineReducer(state, action);
    }
}

const initStore = () => {
    return createStore(mainReducer, composeWithDevTools(applyMiddleware()))
}

export const wrapper = createWrapper(initStore)