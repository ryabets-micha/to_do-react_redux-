import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from './cards';

export default combineReducers({
  routing: routerReducer,
  cards
});