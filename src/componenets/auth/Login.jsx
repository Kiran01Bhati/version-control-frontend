import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GitBranch,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-[#161b22]/80 backdrop-blur-xl border border-[#30363d] rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-600 p-4 rounded-2xl shadow-lg shadow-green-500/20">
            <GitBranch className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Login to continue managing repositories.
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Email
            </label>

            <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-xl px-4 focus-within:border-green-500 transition-all">
              <Mail className="text-gray-500 w-5 h-5" />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-300">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-green-500 hover:text-green-400"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-xl px-4 focus-within:border-green-500 transition-all">
              <Lock className="text-gray-500 w-5 h-5" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-gray-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-gray-500 w-5 h-5" />
                ) : (
                  <Eye className="text-gray-500 w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input type="checkbox" className="accent-green-600" />
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-green-500/20"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">
          <div className="flex-1 h-px bg-[#30363d]"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-[#30363d]"></div>
        </div>

        {/* GitHub Button */}
        <button className="w-full bg-[#0d1117] border border-[#30363d] hover:border-gray-500 transition-all py-4 rounded-xl text-white flex items-center justify-center gap-2">
          <GitBranch className="w-5 h-5" />
          Continue with GitHub
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Don’t have an account?{" "}
          <span className="text-green-500 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}