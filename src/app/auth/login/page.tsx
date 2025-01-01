"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");
  const router = useRouter();

  const descriptions: string[] = [
    "Discover your dream home with our exclusive listings and personalized service.",
    "Explore luxury real estate properties that match your unique style.",
    "Find the perfect place to call home with ease and confidence.",
    "Transforming the way you buy and sell real estate, one property at a time.",
    "Connecting you to your ideal property with expert guidance and care.",
  ];

  useEffect(() => {
    let index = Math.floor(Math.random() * descriptions.length);
    setText(descriptions[index]);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const data = await res.json();
        setError(data.error || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to log in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row h-full w-full max-w-5xl rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800">
        {/* Left Section */}
        <div
          className="w-full md:w-1/2 p-12 flex flex-col justify-center"
          style={{ flex: 2 }}
        >
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Sign in to continue managing your properties with ease.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-neutral-600 dark:text-neutral-400">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="text-blue-600 hover:text-yellow-500 dark:text-indigo-400 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Sign In
            </button>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:text-yellow-500 dark:text-indigo-400 hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Right Section with Background Image */}
        <div
          className="hidden md:flex w-1/2 bg-cover bg-center p-6 m-2 rounded-lg"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/real-estate.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            flex: 1,
          }}
        >
          <div className="flex flex-col justify-between">
            <h1 className="text-white font-bold text-5xl">Real Estate Hub</h1>
            <p className="text-neutral-300">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
