
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types'; 

export default function Dashboard({ user }: { user: User }) {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to login if user is not authenticated
    }
  }, [user, router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {user.role === 'owner' && (
        <div>
          <h2 className="text-xl font-semibold">Owner Dashboard</h2>
          <p>Manage your properties and view tenant information.</p>
        </div>
      )}

      {user.role === 'tenant' && (
        <div>
          <h2 className="text-xl font-semibold">Tenant Dashboard</h2>
          <p>View property details and manage your rental activities.</p>
        </div>
      )}

      {user.role === 'administrator' && (
        <div>
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <p>Manage users, properties, and system settings.</p>
        </div>
      )}
    </div>
  );
}
