import { combineReducers } from 'redux';
import postsReducer from './post';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
