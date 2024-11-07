import { createStore } from 'redux';
import rootReducer from '../reducers'; // Import the combined reducer

// Create the Redux store
const store = createStore(rootReducer);

export default store;
