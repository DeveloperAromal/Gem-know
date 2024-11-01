import Link from "next/link";

export default function LoginForm() {
  return (
    <section className="h-screen flex w-full">
      <div className="bg-log w-3/5 h-full bg-cover bg-center"></div>
      <div className="w-2/5 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-teal-600">Login</h2>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>
          <form className="mt-8 space-y-6">
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
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
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
