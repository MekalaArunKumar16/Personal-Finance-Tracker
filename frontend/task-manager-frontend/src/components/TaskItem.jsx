import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
    return (
        <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-6 w-[30%] max-xl:w-[45%] max-lg:w-[45%] max-md:w-[100%] transition-transform transform hover:scale-105 mb-6 border-[3px]  border-blue-600">
            {/* Title & Action Buttons */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-gray-900">{task.title}</h1>
                <div className="flex items-center gap-3">
                    {/* Edit Button */}
                    <button
                        onClick={() => onEdit(task)}
                        className="text-gray-700 hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaEdit size={24} />
                    </button>
                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(task.id)}
                        className="text-gray-700 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        <MdDelete size={24} />
                    </button>
                    {/* Status Toggle Button */}
                    <button
                        onClick={() => onToggleStatus(task.id)}
                        className="text-gray-700 hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        <MdOutlineTaskAlt size={24} />
                    </button>
                </div>
            </div>
            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-3">{task.description}</p>
            {/* Status and Due Date */}
            <div className="flex justify-between items-center">
                {/* Status Badge */}
                <p
                    className={`text-sm font-semibold py-1 px-3 rounded-full ${
                        task.status === 'Pending' 
                        ? 'bg-yellow-400 text-white' 
                        : 'bg-green-500 text-white'
                    }`}
                >
                    {task.status}
                </p>
                {/* Due Date */}
                <p className="text-sm text-gray-400">Due: {task.due_date}</p>
            </div>
        </div>
    );
};

export default TaskItem;
