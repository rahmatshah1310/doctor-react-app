import React from "react";
import InputField from "@components/commons/InputField";
import Button from "@components/commons/Button";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white ">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 font-roboto xl:w-1/4 p-6 sm:p-8 border-[var(--light-green)] border rounded-2xl space-y-4 shadow-md bg-white">
        <h2 className="text-2xl text-center font-bold">Create Account</h2>

        <InputField
          type="text"
          placeholder="Name"
          className="p-3 w-full bg-gray-100 rounded"
        />
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

        <Button className="bg-[var(--light-green)] text-white py-2 px-6 rounded hover:bg-[var(--light-green)] w-full">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
