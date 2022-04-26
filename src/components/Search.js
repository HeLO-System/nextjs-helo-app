import React from "react";

//search component for search page
function Search() {
  return (
    <div className="flex justify-start h-80 items-center p-20 bg-black overflow-hidden">
      <div className="relative w-full max-w-lg">
        <div className="absolute -top-44 -left-28 w-[30rem] h-[40rem] rounded-full opacity-100 bg-red-400 filter blur-2xl mix-blend-normal animate-blob"></div>
        <div className="absolute -top-40 -right-10 w-96 h-[30rem] rounded-full opacity-50 bg-cyan-300 filter blur-2xl mix-blend-normal animate-blob animation-delay-2000"></div>
        <div className="absolute -top-32 left-24 w-[30rem] h-[30rem] rounded-full opacity-50 bg-pink-300 filter blur-2xl  mix-blend-normal animate-blob animation-delay-5000"></div>
        <div className="relative flex flex-col gap-5 justify-center items-center">
          <h1 className="font-bold text-8xl truncate h-28">HeLO System</h1>
          <div className="flex items-center justify-start">
            <div className="flex rounded-xl border-2 bg-white">
              <button className="flex items-center justify-center rounded-xl px-4 hover:scale-110">
                <svg
                  className="h-10 w-10 text-gray-700"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
              </button>
              <input
                type="text"
                className="w-80 rounded-xl px-4 py-2 focus:outline-none bg-white"
                placeholder="Search for clans, matches, players"
                onChange={(e) => {
                  console.log("typed in: ", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;