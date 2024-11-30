const Navbar = ({ openAddModal}) => {
  return (
   <>
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-6 mx-8 max-lg:mx-4 rounded-3xl shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center space-x-2 text-white font-bold text-3xl">
          <h1 className="text-xl">Finance</h1>
          <h1>Tracker</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={openAddModal}
            className=" text-white text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-blue-500 transition duration-300 ease-in-out"
          >
            Add Task
          </button>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Navbar;
