import React from "react";
import Sidebar from "@/app/components/ui/sidebar";

const TenantDashboard = () => {
  const tenantLinks = [
    { name: "Overview", href: "/dashboard/tenant" },
    { name: "Payments", href: "/dashboard/tenant/payments" },
    { name: "Requests", href: "/dashboard/tenant/requests" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar links={tenantLinks} />

      <main
        className="flex-1 p-6 "
        style={{
          backgroundImage: `url(/home4.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Tenant Dashboard
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Current Lease
            </h3>
            <p className="text-gray-600">Apartment 203, Dar Es Salaam</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Next Payment Due
            </h3>
            <p className="text-2xl font-bold text-gray-900">$1,200</p>
          </div>
          <div className="bg-white p-4 shadow rounded-md">
            <h3 className="text-lg font-semibold text-gray-700">
              Maintenance Requests
            </h3>
            <p className="text-gray-600">2 Pending</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activities
          </h3>
          <ul>
            <li className="mb-2 text-gray-600">Paid rent for January</li>
            <li className="mb-2 text-gray-600">
              Maintenance request: Plumbing issue
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
        </div>
      </main>
    </div>
  );
};

export default TenantDashboard;
