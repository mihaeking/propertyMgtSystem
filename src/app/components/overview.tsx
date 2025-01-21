export default function Overview(){
  return(
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Overview</h2>
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
  )
}
