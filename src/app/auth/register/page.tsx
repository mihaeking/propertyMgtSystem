"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "tenant", // Default Role
    });
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter();


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (isSubmitting) return;
        setIsSubmitting(true)
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            if (res.ok) {
                router.push("/auth/login");
            } else {
                const data = await res.json();
                setError(data.error || "Something went wrong.");
            }
        } catch (err) {
            setError("Unable to register. Please try again.");
        } finally {
            setIsSubmitting(false)
        }
    };

    return (
        <div className="min-h-screen p-8 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <div
                className="flex flex-col md:flex-row h-full w-full max-w-5xl rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800">
                <div
                    className="hidden md:flex w-1/2 bg-cover bg-center p-6 m-2 rounded-lg"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bg-2.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        flex: 1,
                    }}
                >
                    <div className="flex flex-1 flex-col justify-between">
                        <h1 className="text-white font-bold text-5xl">Join Us Today</h1>
                        <p className="text-neutral-300">
                            Sign up and start exploring properties with ease and confidence.
                        </p>
                    </div>
                </div>

                <div className="w-full flex-2 md:w-1/2 p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
                        Create an Account
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                        Join our platform to manage properties effortlessly.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mt-1 border text-neutral-700 border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mt-1 border text-neutral-700 border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={form.password}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mt-1 border text-neutral-700 border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Role
                            </label>
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 mt-1 border text-neutral-700 border-neutral-300 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700"
                            >
                                <option value="tenant">Tenant</option>
                                <option value="owner">Owner</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            disabled={isSubmitting || !form.email || !form.password || !form.name}
                            type="submit"
                            className="w-full disabled:bg-gray-400 disabled:cursor-not-allowed  bg-blue-600 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
                        >
                            {isSubmitting ? "Signing up..." : "Sign Up"}
                        </button>
                        <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
                            Already have an account?{" "}
                            <a
                                href="/auth/login"
                                className="text-blue-600 hover:text-yellow-500 dark:text-indigo-400 hover:underline"
                            >
                                Sign In
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
