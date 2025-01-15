import React from "react";
import Sidebar from "@/app/components/ui/sidebar";
import Card from "@/app/components/card";
import { FaBuilding, FaUsers, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";

const AdminDashboard = () => {
  const adminLinks = [
    { name: "Overview", href: "/dashboard/admin" },
    { name: "Manage Properties", href: "/dashboard/admin/properties" },
    { name: "Manage Tenants", href: "/dashboard/admin/tenants" },
    { name: "Reports", href: "/dashboard/admin/reports" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar links={adminLinks} />
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h2>
        </header>

        {/* Important Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Total Properties" value="120" icon={<FaBuilding size={32} />} />
          <Card title="Total Tenants" value="450" icon={<FaUsers size={32} />} />
          <Card title="Total Revenue" value="$34,000" icon={<FaMoneyBillWave size={32} />} />
          <Card title="Pending Requests" value="15" icon={<FaClipboardList size={32} />} />
        </section>

        {/* Additional Content */}
        <div className="mt-6"></div>
      </main>
    </div>
  );
};

export default AdminDashboard;
