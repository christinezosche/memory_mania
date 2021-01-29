import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gameReducer from './gameReducer';


const rootReducer = combineReducers({
  gameReducer,
  appReducer
});

export default rootReducer