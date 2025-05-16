import React from "react";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/4 p-8 font-roboto space-y-3 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <InputField
          type="email"
          placeholder="Email"
          className="mt-3 p-3 w-full bg-gray-100 rounded"
        />
        <InputField
          type="password"
          placeholder="Password"
          className="mt-3 p-3 w-full bg-gray-100 rounded"
        />
        <a href="#" className="text-sm text-blue-500 mt-2 inline-block">
          Forgot your password?
        </a>
        <Button className="bg-[var(--light-green)] text-white py-2 px-6 mt-4 rounded hover:bg-[var(--light-green)] w-full">
          Log In
        </Button>
      </div>
    </div>
  );
}
