export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-10">
        NotesApp
      </h1>

      {/* Menu */}
      <div className="flex flex-col gap-4">

        <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-700 transition">
          Home
        </button>

        <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-700 transition">
          All Notes
        </button>

        <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-700 transition">
          Create Note
        </button>

        <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-700 transition">
          Tags
        </button>

        <button className="text-left px-4 py-3 rounded-lg hover:bg-gray-700 transition">
          Settings
        </button>

      </div>

    </div>
  );
}