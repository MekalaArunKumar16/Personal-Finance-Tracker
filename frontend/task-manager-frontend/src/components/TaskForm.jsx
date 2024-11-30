import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, currentTask, clearEdit }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    status: 'Pending',
  });

  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    if (currentTask) {
      setTask({
        id: currentTask.id, // Include the ID for editing
        title: currentTask.title,
        description: currentTask.description,
        due_date: currentTask.due_date,
        status: currentTask.status,
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error for the field being updated
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!task.title.trim()) newErrors.title = 'Title is required.';
    if (!task.description.trim())
      newErrors.description = 'Description is required.';
    if (!task.due_date) newErrors.due_date = 'Due date is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(task); // Pass the task to the parent component (App)
    setTask({
      title: '',
      description: '',
      due_date: '',
      status: 'Pending',
    }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          name="due_date"
          value={task.due_date}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        {errors.due_date && (
          <p className="text-red-500 text-sm mt-1">{errors.due_date}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="submit" className="btn btn-primary">
          {currentTask ? 'Update Task' : 'Add Task'}
        </button>
        <button
          type="button"
          onClick={() => {
            clearEdit();
          }}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
