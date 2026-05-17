export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Signin
        </h1>

        <form className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />

          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-4">
          Don,t have an account? Signup
        </p>

      </div>
    </div>
  );
}