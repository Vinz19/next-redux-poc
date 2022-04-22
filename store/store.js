import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from './todo/reducer';

const combineReducer = combineReducers({
    todo
});

const Reducer = (state, action) => {
    if(action.type === HYDRATE) {
        const newState = {
            ...state,
            todos: {
                todos: [...new Set([...action.payload.todo.todos, ...state.payload.todo])]
            }
        }
        return newState
    } else {
        return combineReducer(state, action);
    }
}

const initStore = () => {
    return createStore(Reducer, composeWithDevTools(applyMiddleware()))
}

export const wrapper = createWrapper(initStore)