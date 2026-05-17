export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <form className="space-y-4">

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account? Signin
        </p>

      </div>
    </div>
  );
}