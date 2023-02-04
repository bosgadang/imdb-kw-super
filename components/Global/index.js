import React from 'react';
import Link from 'next/link';

export default function Header({ onSubmit }) {
  return (
    <div>
      <div
        className="fixed w-full flex justify-between items-center px-10 h-20 bg-slate-800 z-20
       
      "
      >
        <h1 className="text-3xl font-bold bg-yellow-300 px-2 py-1">
          IMDb KW Super
        </h1>
        <button
          className="text-3xl text-white lg:hidden"
          onClick={() => {
            const toggleMenu = document.getElementById('toggleMenu');
            toggleMenu.classList.toggle('-translate-x-full');
          }}
        >
          &#9776;
        </button>
        <div
          className="flex flex-col lg:flex-row lg:justify-between lg:static fixed -translate-x-full lg:translate-x-0  text-white top-20 left-0 z-10 w-full lg:w-2/3 bg-slate-800
          transition-all duration-300 ease-in-out
          "
          id="toggleMenu"
        >
          <Link
            href="#"
            className=" pl-10 lg:px-2  lg:rounded-md py-2 hover:text-black hover:bg-slate-300"
          >
            <span className="mr-3">&#127909;</span>
            Home
          </Link>
          <Link
            href="#section1"
            className="pl-10 lg:px-2 lg:rounded-md py-2 hover:text-black hover:bg-slate-300"
          >
            <span className="mr-3">&#127909;</span>About
          </Link>
          <Link
            href="#section2"
            className=" pl-10 lg:px-2 lg:rounded-md py-2 hover:text-black hover:bg-slate-300"
          >
            <span className="mr-3">&#127909;</span>Favorite
          </Link>
          <Link
            href="#section3"
            className=" pl-10 lg:px-2 lg:rounded-md py-2 hover:text-black hover:bg-slate-300"
          >
            <span className="mr-3">&#127909;</span>Movie List
          </Link>
        </div>
      </div>
      <div className="flex relative bg-hero-image h-screen w-auto bg-cover object-center after:content-[''] bg-no-repeat after:block after:absolute after:w-full after:h-full after:bg-gradient-to-t from-black to-[rgba(255,255,255,0)25%]">
        <div className="flex flex-col h-full items-center justify-center pb-40 text-white m-auto">
          <h1 className="text-4xl mix-blend-difference font-bold ">
            Best IMDb Ever
          </h1>
          <p className="mix-blend-difference">
            Explore your favorite movies and enjoy the show.
          </p>
          <form
            className="flex flex-col items-center w-full mt-10 z-10"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              placeholder="Add your favorite movie here..."
              name="search"
              className="w-full shadow-md shadow-gray-100 text-lg text-black  px-3 py-2 rounded-md"
            />
            <button
              type="submit"
              className="mt-5 w-40 bg-yellow-400 shadow-md shadow-yellow-100 text-lg text-black font-bold px-3 py-2 rounded-md"
            >
              Explore Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
