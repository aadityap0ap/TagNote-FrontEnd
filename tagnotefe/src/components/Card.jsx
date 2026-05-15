export default function Card({ title, content, tags }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 space-y-4">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>
      <p className="text-gray-600">
        {content}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

    </div>
  );
}