'use client';
import React, { useState } from 'react';

interface Customer {
  name: string;
  email: string;
  image_url: string;
}
import { createCustomerData } from '@/app/lib/actions';

const CustomerRegistration: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    image_url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object from the customer state
    e.preventDefault();
    customer.image_url = '/customers/evil-rabbit.png';
    const formData = new FormData();
    formData.append('name', customer.name);
    formData.append('email', customer.email);
    formData.append('image_url', customer.image_url);

    const response = await createCustomerData(formData);
  };
  return (
    <form
      onSubmit={registerUser}
      className="flex flex-col items-center space-y-4"
    >
      <input
        className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        name="email"
        value={customer.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
      >
        Register
      </button>
    </form>
  );
};

export default CustomerRegistration;
