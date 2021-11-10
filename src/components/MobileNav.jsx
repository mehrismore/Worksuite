import React from "react";

export const MobileNav = () => {
  return (
    // <style>
    // @import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
    // @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
    // body {
    //     font-family: 'Poppins', sans-serif;
    // }
    // .hover\:w-full:hover {
    //     width: 100%;
    // }
    // .group:hover .group-hover\:w-full {
    //     width: 100%;
    // }
    // .group:hover .group-hover\:inline-block {
    //     display: inline-block;
    // }
    // .group:hover .group-hover\:flex-grow {
    //     flex-grow: 1;
    // }
    // </style>

    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
      <div class="w-full max-w-md mx-auto">
        <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
          <div class="flex">
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-home text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Home
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-compass text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Explore
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-search text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Search
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                  <i class="far fa-cog text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Settings
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
          <div class="flex">
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                  <i class="far fa-home text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Home
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                  <i class="far fa-compass text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Explore
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                  <i class="far fa-search text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Search
                  </span>
                </span>
              </a>
            </div>
            <div class="flex-auto hover:w-full group">
              <a
                href="#"
                class="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
              >
                <span class="block px-1 py-1 border border-transparent group-hover:border-indigo-500 rounded-full group-hover:flex-grow">
                  <i class="far fa-cog text-2xl pt-1"></i>
                  <span class="hidden group-hover:inline-block ml-3 align-bottom pb-1">
                    Settings
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="px-7 bg-white shadow-lg rounded-2xl mb-5">
          <div class="flex">
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              >
                <span class="block px-1 pt-1 pb-2">
                  <i class="far fa-home text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-1">Home</span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              >
                <span class="block px-1 pt-1 pb-2">
                  <i class="far fa-compass text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-1">Explore</span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              >
                <span class="block px-1 pt-1 pb-2">
                  <i class="far fa-search text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-1">Search</span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
              >
                <span class="block px-1 pt-1 pb-2">
                  <i class="far fa-cog text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-1">Settings</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="px-7 bg-white shadow-lg rounded-2xl">
          <div class="flex">
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span class="block px-1 pt-1 pb-1">
                  <i class="far fa-home text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-2">Home</span>
                  <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span class="block px-1 pt-1 pb-1">
                  <i class="far fa-compass text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-2">Explore</span>
                  <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span class="block px-1 pt-1 pb-1">
                  <i class="far fa-search text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-2">Search</span>
                  <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <a
                href="#"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
              >
                <span class="block px-1 pt-1 pb-1">
                  <i class="far fa-cog text-2xl pt-1 mb-1 block"></i>
                  <span class="block text-xs pb-2">Settings</span>
                  <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
