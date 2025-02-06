"use client";
import React, { useState } from "react";
import OwnerList from "./OwnerList";
import OwnerForm from "./OwnerForm";

interface Owner {
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

const OwnersPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState<Owner | null>(null);
  const [owners, setOwners] = useState<Owner[]>([]);

  const handleAddOwner = (owner: Owner) => {
    setOwners([...owners, { ...owner, id: Date.now().toString() }]);
    setIsFormOpen(false);
  };

  const handleEditOwner = (owner: Owner) => {
    setOwners(owners.map((o) => (o.id === owner.id ? owner : o)));
    setSelectedOwner(null);
    setIsFormOpen(false);
  };

  const handleDeleteOwner = (ownerId: string) => {
    setOwners(owners.filter((o) => o.id !== ownerId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Manage Owners
          </h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add New Owner
          </button>
        </div>

        {isFormOpen && (
          <OwnerForm
            onSubmit={selectedOwner ? handleEditOwner : handleAddOwner}
            onCancel={() => {
              setIsFormOpen(false);
              setSelectedOwner(null);
            }}
            initialData={selectedOwner}
          />
        )}

        <OwnerList
          owners={owners}
          onEdit={(owner) => {
            setSelectedOwner(owner);
            setIsFormOpen(true);
          }}
          onDelete={handleDeleteOwner}
        />
      </div>
    </div>
  );
};

export default OwnersPage;
