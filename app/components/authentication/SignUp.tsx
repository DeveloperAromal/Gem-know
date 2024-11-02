"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import PasswordStrengthBar from "react-password-strength-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [div, setDiv] = useState("");
  const [className, setClassName] = useState("");
  const [admNo, setAdmNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [date_of_birth, setDate_Of_Birth] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) {
        throw signUpError;
      }

      const { user } = data;

      const { error: insertError } = await supabase.from("users").insert([
        {
          name,
          email,
          className,
          div,
          date_of_birth,
          admNo,
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      if (user) {
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        toast.success("Account created successfully");
        router.push("/dashboard");
      } else {
        toast.error("An error occurred while creating your account");
      }
    } catch (error) {
      toast.error(
        (error as Error).message ||
          "An error occurred while creating your account"
      );
    }
  };

  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      value =
        value.slice(0, 2) + (value.length > 2 ? "/" : "") + value.slice(2);
    }
    if (value.length > 3) {
      value =
        value.slice(0, 5) + (value.length > 5 ? "/" : "") + value.slice(5);
    }
    setDate_Of_Birth(value);
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (value.length === 10 && !regex.test(value)) {
      toast.error("Please enter a valid date in the format DD/MM/YYYY.");
    }
  };

  return (
    <section className="h-screen">
      <ToastContainer />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full bg-gray-100 p-10 rounded-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-teal-600">Sign Up</h2>
            <p className="mt-1 mb-2 text-gray-600">Create your new account</p>
          </div>
          <div className="space-y-2">
            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Admission Number
                </label>
                <input
                  type="text"
                  value={admNo}
                  required
                  onChange={(e) => setAdmNo(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Class
                </label>
                <input
                  type="text"
                  value={className}
                  required
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Division
                </label>
                <input
                  type="text"
                  value={div}
                  required
                  onChange={(e) => setDiv(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  DOB
                </label>
                <input
                  type="text"
                  value={date_of_birth}
                  required
                  onChange={handleDateOfBirthChange}
                  placeholder="DD/MM/YYYY"
                  maxLength={10}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            {/* Password Fields with Show/Hide Feature */}
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <span
                    className="absolute right-3 top-4 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <span
                    className="absolute right-3 top-4 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>
                </div>
              </div>
            </div>

            <PasswordStrengthBar password={password} />

            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full py-2 mt-6 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/v1/login"
              className="text-teal-500 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
