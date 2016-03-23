import {createApp} from 'mantra-core';
import {combineReducers} from 'redux';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';

const coreReducers = coreModule.reducers;
const commentsReducers = commentsModule.reducers;
const reducer = combineReducers({
  ...coreReducers,
  ...commentsReducers
});

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();