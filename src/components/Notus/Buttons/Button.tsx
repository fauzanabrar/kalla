import React from 'react';

export default function Button() {
  return (
    <>
      <div className="mt-8">
        <h1 className="font-semibold mt-8 mb-2 text-3xl">
          Small Filled Buttons
        </h1>
        <p className="lead text-lg text-blueGray-500">
          Small filled buttons in different styles and colors can be used for
          call to actions in forms and more.
        </p>
        <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
      </div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <i className="fas fa-heart"></i> Small
      </button>
      <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <i className="fas fa-heart"></i> Regular
      </button>
      <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
      <button
        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-6 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <i className="fas fa-heart"></i>
      </button>
      <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
    </>
  );
}
