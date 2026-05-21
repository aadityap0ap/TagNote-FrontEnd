export default function CreateNote() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">

      <h1 className="text-3xl font-bold mb-6">
        Create Note
      </h1>

      <form className="space-y-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Enter note title"
          className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Content */}
        <textarea
          placeholder="Write your note..."
          rows="6"
          className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Enter tags separated by commas"
          className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Add Note
        </button>

      </form>

    </div>
  );
}