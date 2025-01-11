import RegistrationForm from "@/components/formComponents/registrationForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleRegister = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@example.com",
          password: "password123",
        }),
      });

      if (response.ok) {
        const data = await response.json(); console.log("Registration successful:", data);
        alert("Registration successful!");
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        alert(errorData.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div >
      <div className="bg-blue-500 bg-opacity-50 text-black text-center py-16">
  <h1 className="text-4xl font-bold mb-4">Welcome to Digitized Real Estate</h1>
  <p className="text-xl mb-6">
    Manage your properties, tenants, and transactions effortlessly.
  </p>
  <a href="@/api/register">
    <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-200"
      onClick={handleRegister}>
      Get Started
    </button>
  </a>
</div>
{/* <div>

    < RegistrationForm/>
</div> */}

<section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Easy Property Management</h3>
        <p className="text-gray-600">
          Manage your properties, tenants, and transactions seamlessly.
        </p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
        <p className="text-gray-600">
          Ensure secure and transparent payment tracking for all users.
        </p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
        <p className="text-gray-600">
          Intuitive design for an enhanced user experience.
        </p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto text-center">
    <p>&copy; 2025 Real Estate System. All rights reserved.</p>
    <div className="flex justify-center space-x-6 mt-4">
      <a href="#" className="hover:text-gray-400">Privacy Policy</a>
      <a href="#" className="hover:text-gray-400">Terms of Service</a>
      <a href="#" className="hover:text-gray-400">Contact Us</a>
    </div>
  </div>
</footer>
   
    </div>
  );
}
