"use client";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchTasks, deleteTask, updateTask } from '../../src/actions/taskActions';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tasks = useSelector((state) => state.taskReducer.tasks);

  const [showFilteredTasks, setShowFilteredTasks] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateTask(id, { status: newStatus }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleNewTaskClick = () => {
    router.push('/new-task');
  };

  const handleFilterToggle = () => {
    setShowFilteredTasks(!showFilteredTasks);
  };

  // Filter tasks based on the selected filter toggle
  const filteredTasks = showFilteredTasks
    ? tasks.filter((task) => task.status === 'To Do' || task.status === 'In Progress')
    : tasks;

  // Count tasks by status for the Pie chart
  const taskCount = {
    'To Do': 0,
    'In Progress': 0,
    'Completed': 0,
  };

  tasks.forEach((task) => {
    if (task.status in taskCount) {
      taskCount[task.status]++;
    }
  });

  // Data for Pie chart
  const pieChartData = {
    labels: ['To Do', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [taskCount['To Do'], taskCount['In Progress'], taskCount['Completed']],
        backgroundColor: ['#FF5733', '#FFB300', '#4CAF50'],
        hoverBackgroundColor: ['#FF5733', '#FFB300', '#4CAF50'],
      },
    ],
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Welcome User👋 </h1>
          <button
            onClick={handleFilterToggle}
            className={`px-4 py-2 rounded shadow bg-blue-500 text-white hover:bg-blue-600 ${
              showFilteredTasks ? '' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {showFilteredTasks ? 'Show All Tasks' : 'Show Active Tasks'}
          </button>
        </div>
        <button
          onClick={handleNewTaskClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          New Task
        </button>
      </div>

      {/* Centered Pie Chart */}
      <div className="bg-white shadow rounded-lg p-4 mb-4 flex justify-center">
        <div className="w-full max-w-xs">
          <h3 className="text-xl font-semibold mb-4 text-center">Task Breakdown</h3>
          <div className="flex justify-center">
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        {filteredTasks.length > 0 ? (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`flex justify-between items-center p-4 border-b border-gray-200 rounded-lg ${
                  task.status === 'To Do'
                    ? 'bg-red-300'
                    : task.status === 'In Progress'
                    ? 'bg-yellow-300'
                    : 'bg-green-300'
                }`}
              >
                <div>
                  <h2 className="font-semibold text-lg">{task.title}</h2>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  {task.status === 'To Do' && (
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  )}
                  {task.status === 'In Progress' && (
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-orange-500 hover:text-orange-700"
                    >
                      Delete
                    </button>
                  )}
                  {task.status === 'Completed' && (
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-green-500 hover:text-green-700"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
