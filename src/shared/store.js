import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory, createMemoryHistory } from 'history';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore( (__isClient__ ? createBrowserHistory() : createMemoryHistory()), store)

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
