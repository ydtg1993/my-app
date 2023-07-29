import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer);

export default store;