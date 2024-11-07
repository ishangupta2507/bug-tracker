import { ADD_TASK, UPDATE_TASK, DELETE_TASK, FETCH_TASKS } from '../actionTypes';

// Dummy tasks for now
const dummyTasks = [
  { id: 1, title: 'Fix bug #1', description: 'Fix button alignment', priority: 'High', status: 'In Progress', assignee: 'John Doe', createdAt: '2024-11-01' },
  { id: 2, title: 'Implement feature X', description: 'Implement new search functionality', priority: 'Medium', status: 'To Do', assignee: 'Jane Smith', createdAt: '2024-11-02' },
  { id: 3, title: 'Update user profile UI', description: 'Redesign user profile page for better UX', priority: 'Low', status: 'Completed', assignee: 'Alice Johnson', createdAt: '2024-11-03' },
  { id: 4, title: 'Optimize database queries', description: 'Improve database performance for analytics', priority: 'High', status: 'In Progress', assignee: 'Robert Brown', createdAt: '2024-11-04' },
  { id: 5, title: 'Write API documentation', description: 'Document API endpoints for external use', priority: 'Medium', status: 'To Do', assignee: 'Michael Green', createdAt: '2024-11-05' },
  { id: 6, title: 'Add password reset feature', description: 'Implement password reset functionality via email', priority: 'High', status: 'To Do', assignee: 'Sarah Lee', createdAt: '2024-11-06' },
  { id: 7, title: 'Fix mobile responsiveness', description: 'Make sure site is fully responsive on mobile', priority: 'Medium', status: 'In Progress', assignee: 'Emily White', createdAt: '2024-11-07' }
];


export const fetchTasks = () => {
  return {
    type: FETCH_TASKS,
    payload: dummyTasks,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      ...task,
      id: Date.now(),  // Assign a unique ID for each new task
      createdAt: new Date().toISOString().split('T')[0],  // Set current date
    },
  };
};

export const updateTask = (id, updatedFields) => ({
  type: UPDATE_TASK,
  payload: { id, updatedFields },
});
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
