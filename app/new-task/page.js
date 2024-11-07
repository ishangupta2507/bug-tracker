"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addTask } from '../../src/actions/taskActions';

const NewTask = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'To Do',
    assignee: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));  // Dispatch add task action
    router.push('/dashboard'); // Navigate back to dashboard after dispatching
  };

  return (
    <div
      className="p-4 max-w-md mx-auto bg-gray-100 shadow rounded-lg"
      style={{ border: '1px solid #ddd' }}
    >
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Priority</label>
          <select
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Assignee</label>
          <input
            type="text"
            name="assignee"
            value={taskData.assignee}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
