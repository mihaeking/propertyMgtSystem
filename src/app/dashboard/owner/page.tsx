import React from "react";
import Sidebar from "@/app/components/ui/sidebar";
import Card from "@/app/components/card";
import { FaBuilding, FaUsers, FaChartPie, FaDollarSign } from "react-icons/fa";

const OwnerDashboard = () => {
  const ownerLinks = [
    { name: "Overview", href: "/dashboard/owner" },
    { name: "My Properties", href: "/dashboard/owner/properties" },
    { name: "Tenant Details", href: "/dashboard/owner/tenants" },
    { name: "Income Reports", href: "/dashboard/owner/reports" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar links={ownerLinks} />
      <main
        className="flex-1 p-6 "
        style={{
          backgroundImage: `url(/home2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Owner Dashboard
          </h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Properties Owned"
            value="25"
            icon={<FaBuilding size={32} />}
          />
          <Card title="Total Tenants" value="90" icon={<FaUsers size={32} />} />
          <Card
            title="Monthly Revenue"
            value="$8,200"
            icon={<FaDollarSign size={32} />}
          />
          <Card
            title="Occupancy Rate"
            value="95%"
            icon={<FaChartPie size={32} />}
          />
        </section>

        <div className="mt-6">Owner</div>
      </main>
    </div>
  );
};

export default OwnerDashboard;
