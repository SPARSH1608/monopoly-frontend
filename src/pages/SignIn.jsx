import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaGamepad } from 'react-icons/fa'; // Import gaming icon from react-icons library

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/v1/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok === true) {
      const data = await response.json();
      const { user, token } = data;

      toast.success('Login Successful');
      navigate('/dashboard', { state: { user: user, token: token } });
    } else {
      toast.error('Something Went Wrong');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <img
        className="h-screen w-full absolute z-0"
        src="https://www.creativefabrica.com/wp-content/uploads/2023/08/06/Game-Background-Graphics-76306020-1.jpg"
        alt=""
      />
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-900 text-white shadow-md rounded-lg z-10">
        <div className="flex items-center justify-center mb-6">
          <FaGamepad className="text-4xl mr-2" /> {/* Add gaming icon */}
          <h1 className="text-3xl font-bold">Gamer Sign In</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=" mb-2 block text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
