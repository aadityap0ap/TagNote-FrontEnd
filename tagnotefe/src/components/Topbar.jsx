export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">

      {/* Left Section */}
      <h1 className="text-2xl font-bold text-gray-800">
        Notes Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search notes..."
          className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </div>
  );
}