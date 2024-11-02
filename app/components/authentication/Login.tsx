"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);
  
  useEffect(() => {
    const hasLoggedIn = localStorage.getItem("hasLoggedIn");
    if (hasLoggedIn && router) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password");
      return;
    }
  
    const { data, error: LoginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (LoginError) {
      toast.error(LoginError.message);
      return;
    }
  
    if (data?.user) {
      const userEmail = data.user.email ?? '';
      localStorage.setItem("userEmail", userEmail);
      toast.success("Logged in successfully");
      localStorage.setItem("hasLoggedIn", "true");
      router.push("/dashboard");
    } else {
      toast.error("Email or Password does not match");
    }
  };

  return (
    <section className="h-screen w-full flex">
      <ToastContainer/>
      <div className="bg-log w-3/5 h-full bg-cover bg-center"></div>
      <div className="w-2/5 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-teal-600">Login</h2>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/auth/v1/signup" className="text-teal-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
