import { useState } from 'react';
import Avatar from 'react-avatar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SendMoney = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { user, token } = state;

  const [amount, setAmount] = useState(0);

  const submit = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/account/transfer',
      {
        method: 'POST',
        body: JSON.stringify({
          amount: amount,
          to: user._id,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok === true) {
      toast.success('Transfer Successful');
      navigate('/dashboard', { state: { user: user, token: token } });
    } else {
      toast.error('Something Went Wrong');
    }
  };
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-8">Send Money</h2>
        <div className="flex items-center mb-6">
          <span className="mr-4">
            <Avatar name={user.username} />
          </span>
          <h3 className="text-xl font-semibold">{user.username}</h3>
        </div>
        <div>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Amount (in Rs)
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={submit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600"
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
