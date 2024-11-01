import Link from "next/link";

export default function SignupForm() {
  return (
    <section className="h-screen flex w-full">
      {/* Left side background */}
      <div className="bg-log w-3/5 h-full bg-cover bg-center">
        {/* Add any additional background styling or images here */}
      </div>

      {/* Right side signup form */}
      <div className="w-2/5 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-teal-600">Sign Up</h2>
            <p className="mt-2 text-gray-600">Create your new account</p>
          </div>
          <form className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Admission Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Admission Number
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Class Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Division Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/v1/login" className="text-teal-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
