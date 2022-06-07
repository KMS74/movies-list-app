import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import moviesReducer from '../reducer/movieReducer';

// craete a store
const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
