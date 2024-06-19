'use client';
import React, { useState } from 'react';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12h.01M12 12h.01M9 12h.01M21 12c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10 10-4.477 10-10zm-10 0h.01M15 12a3 3 0 01-6 0"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.5 10.5 0 011.5 12m0 0a10.5 10.5 0 0115.472-8.284M21.5 12a10.5 10.5 0 01-15.472 8.284M21.5 12a10.5 10.5 0 01-7.625 9.825m0-19.65A10.5 10.5 0 002.5 12m0 0a10.5 10.5 0 007.625 9.825m0-19.65a10.5 10.5 0 010 19.65"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
