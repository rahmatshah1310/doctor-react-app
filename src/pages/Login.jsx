import React from "react";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 font-roboto xl:w-1/4 p-6 sm:p-8 border-[var(--light-green)] border rounded-2xl space-y-4 shadow-md bg-white">
        <h2 className="text-2xl font-bold text-center ">Log In</h2>

        <InputField
          type="email"
          placeholder="Email"
          className="p-3 w-full bg-gray-100 rounded"
        />
        <InputField
          type="password"
          placeholder="Password"
          className="p-3 w-full bg-gray-100 rounded"
        />

        <Link to="/" className="text-sm text-blue-500 inline-block ">
          Forgot your password?
        </Link>

        <Button className="bg-[var(--light-green)] text-white py-2 px-6 mt-2 rounded hover:bg-[var(--light-green)] w-full">
          Log In
        </Button>
      </div>
    </div>
  );
}
