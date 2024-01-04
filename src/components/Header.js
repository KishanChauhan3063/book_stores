import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/book.gif";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/login");
  };

  return (
    <header
      className={`${
        isActive
          ? "bg-white py-4 shadow-md fixed top-0 left-0 right-0 z-10 transition-all"
          : "bg-none py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center space-x-5">
          <Link to={"/"}>
            <div>
              <img className="" src={Logo} alt="" />
            </div>
          </Link>
          <h2 className="sm:text-3xl">Book Wala</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-black"
          >
            Logout
          </button>
          <a href="/SignIn" className="text-gray-600 hover:text-black">
            Signup
          </a>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
