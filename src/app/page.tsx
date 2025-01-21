import { NavBar } from "./components/nav-bar"
import { HeroSection } from "./components/hero-section"
import Overview from "./components/overview"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Overview />
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
    </main>
  )
}

