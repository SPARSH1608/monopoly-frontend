import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ user, balance, token }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/userinfo', {
      state: { user: user, balance: balance, token: token },
    });
  };

  const handleLogout = () => {
    navigate('/', { state: { user: '', token: '' } });
  };
  return (
    <div className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-2xl font-bold tracking-tight">Payment App</h3>

        <div className="flex items-center">
          <span className="mr-4">
            <h3 className="text-lg">Hello, {user.username}</h3>
          </span>

          <button onClick={handleClick} className="mr-4 focus:outline-none">
            <Avatar name={user.username} size="50" />
          </button>

          <button
            onClick={handleLogout}
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
