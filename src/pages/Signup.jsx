import React from "react";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-roboto bg-white rounded shadow-md">
      <div className="w-1/4 p-8 border-[var(--light-green)] border rounded-2xl space-y-3">
        <h2 className="text-2xl text-center font-bold mb-4">Create Account</h2>
        <InputField
          type="text"
          placeholder="Name"
          className="mt-3 p-3 w-full bg-gray-100 rounded"
        />
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
        <Button className="bg-[var(--light-green)] text-white py-2 px-6 mt-4 rounded hover:bg-[var(--light-green)] w-full">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
