"use client";

import { DEFAULT_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import Link from "next/link";
function RegistrationForm({onSubmit, errors}){


    return(
        <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md" action=""
        onSubmit={ (e) =>{
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
          onSubmit(data);
        }

        }
        
        
        >
  <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Register</h2>

  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
            {errors?.name && <p className="text-red-500 text-sm">{errors.name}</p>}

  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
      Email
    </label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
      {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
  </div>
  <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Create a password"
          />
            {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
         </div> 
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            name="confirmPassword"

            type="password"
            placeholder="Confirm your password"
          />
          {errors?.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
        </div>
  <fieldset className="mb-4">
    <legend className="block text-gray-600 font-bold mb-2"> please select your Role</legend>
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id="owner"
        value="owner"
        name="role"
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="owner" className="ml-2 text-gray-600">
        Owner
      </label>
    </div>
    <div className="flex items-center mb-2">
      <input
        type="radio"
        id="tenant"
        value="tenant"
        name="role"
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="tenant" className="ml-2 text-gray-600">
        Tenant
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="administrator"
        value= "administrator"
        name="role"
        className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor="administrator" className="ml-2 text-gray-600">
        Administrator
      </label>
    </div>
  </fieldset>
  {errors?.role && <p className="text-red-500 text-sm">{errors.role}</p>}

  <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" name="terms" />
            <span className="ml-2 text-gray-700 text-sm">I agree to the Terms and Conditions</span>
          </label>
          {errors?.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

        </div>
  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
  >
    Submit
  </button>
  <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
           Login here
          </Link>
        </p>
</form>

    )
}

export default RegistrationForm;