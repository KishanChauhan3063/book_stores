import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://www.your-space.in/wp-content/uploads/2023/07/Bookstore-2048x852.jpg"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-23-at-2.10.28-PM.png?fit=1568%2C998&quality=80&ssl=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://img.freepik.com/free-photo/teen-boy-enjoying-reading-near-bookcase_23-2147864159.jpg?w=996&t=st=1703748721~exp=1703749321~hmac=66e9317c29f719cc946334873f1305e44ec52afe0b90f026dd33c07afb835e73"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">BookWala</h3>
        <p className="text-2xl py-6">
          Welcome to BookWala, your go-to destination for literary wonders and
          endless stories.
        </p>
        <p className="pb-6">
          At BookWala, we believe in the magic of books and the joy they bring
          to people's lives. Our bookstore is not just a place to buy books;
          it's a haven for book lovers, a sanctuary where stories come to life,
          and where the love for reading is celebrated. BookWala was founded in
          [2003] by a group of avid readers who shared a common dream - to
          create a space where the enchanting world of books could be explored
          and embraced. The journey began with a small, cozy bookstore tucked
          away in a quiet corner, and today, we've grown into a beloved literary
          hub for the community.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl border py-2 px-3 rounded-full">
            Learn More
          </button>
          <a href="/SignIn">
            <button className="bg-black text-white border-black hover:shadow-xl py-2 px-5 rounded-full">
              get started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Books;
