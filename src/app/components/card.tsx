import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode; // Optional icon
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
      {icon && <div className="text-blue-500">{icon}</div>}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default Card;
