import { combineReducers } from 'redux'
import fooReducer from "./foo.reducer";

export default combineReducers({
  foo: fooReducer
})
