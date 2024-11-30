import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className='flex flex-wrap gap-14'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}  // Pass the function here
        />
      ))}
    </div>
  );
};

export default TaskList;
