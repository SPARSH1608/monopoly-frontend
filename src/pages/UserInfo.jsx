import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function UserInfo() {
  const { state } = useLocation();

  const { user, balance, token } = state;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/update', {
      state: { user: user, balance: balance, token: token },
    });
  };
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6">User Info</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Email:</h3>
          <p className="text-gray-800">{user.username}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Last Name:</h3>
          <p className="text-gray-800">{user.lastName}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">First Name:</h3>
          <p className="text-gray-800">{user.firstName}</p>
        </div>
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600"
        >
          Update Info
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
