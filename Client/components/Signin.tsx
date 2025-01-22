import React from 'react';

const SignupForm: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your password"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-purple-500 hover:underline transition duration-300"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;