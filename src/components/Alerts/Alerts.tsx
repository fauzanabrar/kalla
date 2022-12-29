import React from 'react';

export default function Alerts() {
  return (
    <>
      <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
        <div className="my-8">
          <div className="mt-8">
            <h1 className="font-semibold mt-8 mb-2 text-3xl">Alerts</h1>
            <p className="lead text-lg text-blueGray-500">
              Elements that provide contextual feedback messages for user
              actions. The notification is a simple colored block meant to draw
              the attention to the user about something.
            </p>
            <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
          </div>
        </div>
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">pink!</b> This is a pink alert - check it
            out!
          </span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-4 outline-none focus:outline-none">
            <span>×</span>
          </button>
        </div>
        <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
      </div>
      <hr className="mt-6 mb-8 border-b-1 border-blueGray-200" />
    </>
  );
}
