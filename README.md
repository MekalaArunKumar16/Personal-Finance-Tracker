🚀 Task Management Application
A simple and intuitive Task Management Application to organize your tasks effectively. Built with React, Axios, and Tailwind CSS, it allows you to manage tasks with ease and style.

🌟 Features
✅ Add tasks with title, description, due date, and status.
✅ Edit existing tasks seamlessly.
✅ Delete tasks with a single click.
✅ Toggle tasks between Pending and Completed.
✅ Filter tasks by Pending, Completed, or view all.
✅ Real-time notifications using React Toastify.

🛠️ Tech Stack
Technology	Description
React	Frontend library for UI building.
Axios	API requests to manage tasks.
Tailwind CSS	Beautiful and responsive styling.
React Toastify	Notification system.
📦 Installation
Prerequisites
Node.js installed on your machine.
Backend API running (base URL: http://localhost:5000/api).
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/task-manager.git
cd task-manager
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Verify the backend server is running at http://localhost:5000/api.

📂 Folder Structure
bash
Copy code
src/
├── components/
│   ├── Navbar.js           # Top navigation bar
│   ├── TaskForm.js         # Add/Edit task form
│   ├── TaskItem.js         # Individual task display
│   └── TaskList.js         # List of tasks
├── App.js                  # Main application file
├── index.js                # Entry point
└── styles.css              # Custom styles (if applicable)
📝 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Retrieve all tasks.
POST	/api/tasks	Add a new task.
PUT	/api/tasks/:id	Update an existing task.
DELETE	/api/tasks/:id	Delete a specific task.
PATCH	/api/tasks/:id/toggle-status	Toggle task status.
🚀 Running the Application
Navigate to http://localhost:3000 in your browser.
Manage Your Tasks:
Add tasks via the Add Task button.
Edit tasks by clicking the Edit button.
Delete tasks using the Delete button.
Filter tasks by clicking Pending, Completed, or All.
📸 Screenshots
🌐 Main Screen

✍️ Add/Edit Task Modal

✅ Filtered Tasks

🔗 Libraries Used
React
Axios
React Toastify
Tailwind CSS
🤝 Contributing
We welcome contributions! If you'd like to enhance the app, feel free to:

Fork the repository.
Make your changes.
Submit a pull request.
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

