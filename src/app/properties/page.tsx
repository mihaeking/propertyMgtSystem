"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/properties/fetch");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading properties...</p>;

  if (properties.length === 0)
    return <p>No properties available at the moment.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {properties.map((property: any) => (
          <div key={property.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{property.name}</h2>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price} per month</p>
            <Link href={`/properties/${property.id}`}>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View & Pay
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
