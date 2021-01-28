import { createStore } from 'redux'
import gameReducer from './reducers/gameReducer'

export function configureStore(){
return createStore(
  gameReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
}

export const store = configureStore()
