import React from "react";

interface Props {
  formData: {
    user_email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent) => void;
  loading: boolean;
  switchToRegister: () => void;
}

const LoginForm = ({
  formData,
  handleChange,
  handleLogin,
  loading,
  switchToRegister,
}: Props) => (
  <form onSubmit={handleLogin} className="mt-6 space-y-4">
    <input
      type="email"
      name="user_email"
      placeholder="Email"
      value={formData.user_email}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
    />
    <div className="flex justify-between gap-3">
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded-lg font-semibold text-lg transition duration-200"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <button
        type="button"
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold text-lg transition duration-200"
        onClick={switchToRegister}
      >
        Register
      </button>
    </div>
  </form>
);

export default LoginForm;
