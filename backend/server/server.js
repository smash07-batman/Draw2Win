import React from "react";

export default function GarticLogin() {
  return (
    <div className="min-h-screen bg-[url(/images/bgimage.png)] bg-contain p-4 flex flex-col items-center justify-center text-white font-sans">
      <img
        className="w-25 mb-5 hover:scale-110 transition "
        src="/images/logo1.png"
        alt="draw2win logo"
      />
      <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-4xl p-6 md:p-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600">Draw2win</h1>
          <span className="text-sm">DRAW, GUESS, WIN</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Quick Play Section */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold">
                😊
              </div>
              <div className="absolute top-0 right-0 bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-sm">
                ✎
              </div>
            </div>
            <label className="w-full text-left">Nickname:</label>
            <input
              type="text"
              defaultValue="User5692"
              className="w-full p-2 mb-3 border rounded-md"
            />
            <label className="w-full text-left">Language:</label>
            <select className="w-full p-2 mb-5 border rounded-md">
              <option>English</option>
              {/* Add more languages as needed */}
            </select>
            <div className="flex space-x-4">
              <button className="bg-blue-400 hover:bg-blue-500 border-3 border-black text-white py-2 px-5 text-md  rounded-full">
                ROOMS
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 border-3 border-black text-white py-2 px-5  text-md rounded-full">
                PLAY!
              </button>
            </div>
          </div>

          {/* Login Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Log in here</h2>
            <div className="flex justify-between w-full mb-4"></div>
            <span className="text-sm mb-3">Choose a way to log in:</span>
            <div className="grid grid-cols-2 gap-2 w-full">
              <button className="bg-blue-400 text-white py-2 border-3 border-black hover:opacity-80 text-xl rounded-md">
                Twitter
              </button>
              <button className="bg-red-500 text-white py-2 border-3 border-black  hover:opacity-80 text-xl rounded-md">
                Google
              </button>
              <button className="bg-blue-700 text-white py-2 border-3 border-black hover:opacity-80 text-xl rounded-md">
                Facebook
              </button>
              <button className="bg-orange-500 text-white py-2 border-3 border-black hover:opacity-80 text-xl rounded-md">
                Reddit
              </button>
            </div>
            <button className="bg-indigo-600 text-white border-3 border-black w-full hover:opacity-80 text-xl mt-3 py-2 rounded-md">
              Discord
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <a href="#" className="mr-3 hover:underline">
            Assets
          </a>
          <a href="#" className="mr-3 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="mr-3 hover:underline">
            Privacy
          </a>
          <a href="#" className="mr-3 hover:underline">
            Thanks
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
