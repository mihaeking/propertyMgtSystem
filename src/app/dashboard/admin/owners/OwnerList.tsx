import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

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

interface OwnerListProps {
  owners: Owner[];
  onEdit: (owners: Owner) => void;
  onDelete: (townerId: string) => void;
}

const OwnerList: React.FC<OwnerListProps> = ({ owners, onEdit, onDelete }) => {
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
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Lease Period
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Property Unit
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rent
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {owners.map((owner) => (
            <tr key={owner.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {owner.firstName} {owner.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{owner.email}</div>
                <div className="text-sm text-gray-500">{owner.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{new Date(owner.leaseStart).toLocaleDateString()}</div>
                <div className="text-sm text-gray-500">
                  to {new Date(owner.leaseEnd).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {owner.propertyUnit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${owner.rentAmount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    owner.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {owner.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(owner)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => owner.id && onDelete(owner.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {owners.length === 0 && (
        <div className="text-center py-4 text-gray-500">No owners found</div>
      )}
    </div>
  );
};

export default OwnerList;
