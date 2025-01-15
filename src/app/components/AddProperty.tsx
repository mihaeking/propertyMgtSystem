import React from "react";

const AddProperty = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl p-10 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Property</h1>
        <form className="space-y-4">
          
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Property Name</label>
            <input
              type="text"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter property name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Property Location</label>
            <input
              type="text"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter property location"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Property Capacity</label>
            <input
              type="text"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter capacity of property"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">enter the ownership document</label>
            <input
             type="file" 
             className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
             placeholder="deed of ownership"/>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
