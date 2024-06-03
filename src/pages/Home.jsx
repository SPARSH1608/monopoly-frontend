const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-game-scene-fairy-world-scene-image_2296182.jpg"
        alt="Gaming Background"
      />

      {/* Content Container */}
      <div className="container mx-auto flex flex-col items-center justify-center z-10">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-center text-white mb-8">
          Welcome to Our Gaming World!
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sign In Button */}
          <a href="/signin" className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:bg-blue-600">
              Sign In User
            </button>
          </a>
          {/* Sign Up Button */}
          <a href="/signup" className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:bg-green-600">
              Sign Up User
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
