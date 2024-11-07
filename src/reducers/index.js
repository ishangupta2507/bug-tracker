import { combineReducers } from 'redux';
import taskReducer from './taskReducer'; // Import the taskReducer

// Combine reducers
const rootReducer = combineReducers({
  taskReducer, // taskReducer should be the name you use in useSelector
});

export default rootReducer;
