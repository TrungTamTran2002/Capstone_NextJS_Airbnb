import { Link } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../Auth/LoginModal";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Header = () => {
  // thay đổi trạng thái cho dropdown user menu, mobile menu và login modal
  // Sử dụng useState để quản lý trạng thái mở/đóng của các menu và modal
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // fcs để hiện dropdown user menu, mobile menu và login modal
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // fcs hiện dropdown mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // fcs mở login modal và đóng dropdown user menu
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsUserMenuOpen(false); // Đóng dropdown user menu
  };

  // fcs đóng login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://demo4.cybersoft.edu.vn/static/media/airbnb-1.aabeefedaf30b8c7011a022cdb5a6425.svg"
              className="h-8"
              alt="Airbnb Logo"
            />
            <span className="self-center text-2xl font-semi font-bold whitespace-nowrap text-[#FE6B6E] duration-500 hover:text-rose-600">
              airbnb
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Hiển thị dropdown menu */}
            <UserMenu
              toggleUserMenu={toggleUserMenu}
              isUserMenuOpen={isUserMenuOpen}
              openLoginModal={openLoginModal}
            />
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* NavLink */}
          <NavLinks isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </nav>

      {/* Login Modal  */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Header;
