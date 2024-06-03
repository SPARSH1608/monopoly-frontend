import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';

const User = ({ user, token }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-4 transition duration-300 hover:shadow-xl flex flex-col items-center justify-between">
      <Avatar name={user.username} size="100" round={true} />
      <div className="text-lg font-semibold text-white mb-2">
        {user.username}
      </div>
      <button
        onClick={() => {
          navigate('/send', {
            state: { user: user, token: token },
          });
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600"
      >
        Send Money
      </button>
    </div>
  );
};

export default User;
