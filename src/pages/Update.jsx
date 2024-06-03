import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import toast from 'react-hot-toast';
const Update = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const { user, token } = state;

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setlastName] = useState(user.lastName || '');

  const [password, setpassword] = useState(user.password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/user', {
      method: 'PUT',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok === true) {
      toast.success('Update Successfull');
      navigate('/dashboard', { state: { user: user, token: token } });
    } else {
      toast.error('Something Went Wrong');
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Edit Information</h1>
        <h4 className="text-lg mb-6">
          Enter your credentials to update your account
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
