import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
  status: 'active' | 'inactive';
}

interface TenantListProps {
  tenants: Tenant[];
  onEdit: (tenant: Tenant) => void;
  onDelete: (tenantId: string) => void;
}

const TenantList: React.FC<TenantListProps> = ({ tenants, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lease Period
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Property Unit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rent
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tenants.map((tenant) => (
            <tr key={tenant.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {tenant.firstName} {tenant.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{tenant.email}</div>
                <div className="text-sm text-gray-500">{tenant.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{new Date(tenant.leaseStart).toLocaleDateString()}</div>
                <div className="text-sm text-gray-500">
                  to {new Date(tenant.leaseEnd).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {tenant.propertyUnit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${tenant.rentAmount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    tenant.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {tenant.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(tenant)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => tenant.id && onDelete(tenant.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tenants.length === 0 && (
        <div className="text-center py-4 text-gray-500">No tenants found</div>
      )}
    </div>
  );
};

export default TenantList;
