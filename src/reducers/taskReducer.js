// src/reducers/taskReducer.js

import { ADD_TASK, DELETE_TASK, UPDATE_TASK, FETCH_TASKS } from '../actionTypes';

const initialState = {
  tasks: [], // Start with an empty task list or add initial dummy data
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
      case UPDATE_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload.updatedFields } : task
          ),
        };
      
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case FETCH_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
