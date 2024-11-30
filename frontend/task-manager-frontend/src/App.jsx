import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [filter, setFilter] = useState("All"); // Track active filter

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
      console.log(response.data); // Debugging: Verify task structure
    } catch (error) {
      toast.error("Failed to fetch tasks!");
    }
  };

  const addOrUpdateTask = async (task) => {
    try {
      if (task.id) {
        await axios.put(`http://localhost:5000/api/tasks/${task.id}`, task);
        toast.success("Task updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/tasks", task);
        toast.success("Task added successfully!");
      }
      fetchTasks();
      setIsAddModalOpen(false);
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error("An error occurred while saving the task!");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      toast.success("Task deleted successfully!");
      fetchTasks();
    } catch (error) {
      toast.error("An error occurred while deleting the task!");
    }
  };

  const toggleTaskStatus = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${id}/toggle-status`);
      toast.info("Task status toggled!");
      fetchTasks();
    } catch (error) {
      toast.error("An error occurred while updating the task status!");
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openEditModal = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditingTask(null);
    setIsEditModalOpen(false);
  };

  // Apply filter to tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return task.status === "Pending";
    if (filter === "Completed") return task.status === "Completed";
    return true; // Show all tasks
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Navbar openAddModal={openAddModal} />
      <div className="p-4 mx-8 max-lg:mx-4 rounded-3xl justify-end max-md:justify-center flex gap-6">
        <button
          onClick={() => setFilter("Pending")}
          className={`text-lg max-md:text-sm font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out ${
            filter === "Pending"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out ${
            filter === "Completed"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("All")}
          className={`text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out ${
            filter === "All"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-blue-500 hover:text-white"
          }`}
        >
          All
        </button>
      </div>
      <div className="container mx-auto p-8">
        <TaskList
          tasks={filteredTasks} // Pass filtered tasks
          onEdit={openEditModal}
          onDelete={deleteTask}
          onToggleStatus={toggleTaskStatus}
        />
      </div>

      {/* Add Task Modal */}
      <input
        type="checkbox"
        id="add-task-modal"
        className="modal-toggle"
        checked={isAddModalOpen}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={closeAddModal}
          >
            ✕
          </label>
          <TaskForm
            onSubmit={addOrUpdateTask}
            currentTask={null}
            clearEdit={closeAddModal}
          />
        </div>
      </div>

      {/* Edit Task Modal */}
      <input
        type="checkbox"
        id="edit-task-modal"
        className="modal-toggle"
        checked={isEditModalOpen}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={closeEditModal}
          >
            ✕
          </label>
          <TaskForm
            onSubmit={addOrUpdateTask}
            currentTask={editingTask}
            clearEdit={closeEditModal}
          />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
