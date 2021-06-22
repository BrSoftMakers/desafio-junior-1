import { createStore, combineReducers, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk'

import animal from './reducers/Animal';
import animais from './reducers/Animais';

const rootReducer = combineReducers({
    animal,
    animais
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;