"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handle submit is actually called");
    e.preventDefault();
    setError(null);

    console.log({ email, password, role });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.user.role === "tenant") {
          router.push("/dashboard/tenant");
        } else if (data.user.role === "owner") {
          router.push("/dashboard/owner");
        } else if (data.user.role === "admin") {
          router.push("/dashboard/admin");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('/bg-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-1/3 p-6 rounded shadow-md"
        style={{
          backgroundImage: `url('/bg-1.jpg')`,
        }}
      >
        <h1 className="text-2xl font-bold mb-4">WELCOME!</h1>
        <h2 className="font-bold mb-6">Please enter your details to sign in</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="w-full p-2 border border-gray-300 rounded">
          <select
            name="roles"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="owner">owner</option>
            <option value="tenant">tenant</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 w-1/2 rounded ml-28 my-5 hover:bg-blue-900"
        >
          Login
        </button>
        <div>
          <p>
            Don't have an account?{" "}
            <Link href="/register">
              <span className="text-blue-500 hover:underline">SIGN UP</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
