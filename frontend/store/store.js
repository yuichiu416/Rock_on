import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

const configureStore = () => (
    createStore(rootReducer, applyMiddleware(thunk, logger))
);

export default configureStore;
