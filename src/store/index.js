import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { templateReducer } from './reducers/templateReducer';
import { userReducer } from './reducers/userReducer';
import { htmlTagsReducer } from './reducers/htmlTagsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  templateReducer,
  userReducer,
  htmlTagsReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
