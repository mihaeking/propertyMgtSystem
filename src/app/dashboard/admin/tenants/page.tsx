"use client";
import React from "react";
import TenantList from "./TenantList";
import TenantForm from "./TenantForm";
import { useState } from "react";

interface Tenant {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  leaseStart: string;
  leaseEnd: string;
  propertyUnit: string;
  rentAmount: number;
  status: "active" | "inactive";
}

const TenantsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [tenants, setTenants] = useState<Tenant[]>([]);

  const handleAddTenant = (tenant: Tenant) => {
    setTenants([...tenants, { ...tenant, id: Date.now().toString() }]);
    setIsFormOpen(false);
  };

  const handleEditTenant = (tenant: Tenant) => {
    setTenants(tenants.map((t) => (t.id === tenant.id ? tenant : t)));
    setSelectedTenant(null);
    setIsFormOpen(false);
  };

  const handleDeleteTenant = (tenantId: string) => {
    setTenants(tenants.filter((t) => t.id !== tenantId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Manage Tenants
          </h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add New Tenant
          </button>
        </div>

        {isFormOpen && (
          <TenantForm
            onSubmit={selectedTenant ? handleEditTenant : handleAddTenant}
            onCancel={() => {
              setIsFormOpen(false);
              setSelectedTenant(null);
            }}
            initialData={selectedTenant}
          />
        )}

        <TenantList
          tenants={tenants}
          onEdit={(tenant) => {
            setSelectedTenant(tenant);
            setIsFormOpen(true);
          }}
          onDelete={handleDeleteTenant}
        />
      </div>
    </div>
  );
};

export default TenantsPage;
