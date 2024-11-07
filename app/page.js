// app/page.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock login validation
    if (email === "user@example.com" && password === "password") {
      router.push("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="text-4xl mb-6">🔓</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sign in with email</h2>
        <p className="text-gray-500 text-sm mb-6">Keep track of all your tasks</p>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
