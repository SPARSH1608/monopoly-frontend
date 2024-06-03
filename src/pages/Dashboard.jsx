import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import User from '../components/User';

const Dashboard = () => {
  const { state } = useLocation();
  const { user, token } = state;

  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  const getBalance = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/account/balance',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok === true) {
      const data = await response.json();
      setBalance(data.balance);
    }
  };

  const getUsers = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/user/bulk?filter=${filter}`,
      {
        method: 'POST',
        body: JSON.stringify({ id: user._id }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok === true) {
      const data = await response.json();
      setUsers(data.user);
    }
  };

  useEffect(() => {
    getBalance();
    getUsers();
  }, [balance, filter]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar user={user} balance={balance} token={token} />

      <div className="container mx-auto px-4 py-8">
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">
            Your Balance
          </h2>
          <h3 className="text-4xl font-bold mb-4">${balance}</h3>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Users</h2>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user, idx) => (
              <User key={idx} user={user} token={token} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
