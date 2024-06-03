import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://monopoly-backend.onrender.com/user/signup',
      {
        method: 'POST',
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: email,
          password: password,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    if (response.ok === true) {
      toast.success('Registration Successful');
      navigate('/signin');
    } else {
      toast.error('Something Went Wrong');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      <img
        className="h-screen w-full absolute z-0 object-cover"
        src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-the-background-scene-of-the-game-is-dazzling-image_2382309.jpg"
        alt="Gaming Background"
      />
      <div className="max-w-md mx-auto mt-8 p-8 bg-gray-900 text-white shadow-md rounded-lg z-10  w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm mb-2 font-semibold text-white "
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-black placeholder-gray-500 focus:outline-none focus:bg-gray-200"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-semibold text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-black placeholder-gray-500 focus:outline-none focus:bg-gray-200"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-black placeholder-gray-500 focus:outline-none focus:bg-gray-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-gray-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 my-2 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
