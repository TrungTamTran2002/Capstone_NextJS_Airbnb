import { Link } from "react-router-dom";
import { useState } from "react";

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
            <div className="relative">
              <button
                type="button"
                className="flex text-sm rounded-full md:me-0 border-2 border-white bg-gray-800 transition-all duration-300 hover:border-[#FE6B6E] p-[2px] overflow-hidden"
                id="user-menu-button"
                aria-expanded={isUserMenuOpen}
                onClick={toggleUserMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full transition-transform duration-300 hover:scale-105"
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                  alt="user photo"
                />
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute right-0 mt-2 z-50 ${
                  isUserMenuOpen ? "block" : "hidden"
                } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44`}
                id="user-dropdown"
              >
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li className="flex justify-center">
                    <button
                      className="cursor-pointer w-32 px-6 py-2 rounded-sm text-center text-sm text-gray-700 hover:bg-gray-100"
                      type="button"
                      onClick={openLoginModal}
                    >
                      Đăng Nhập
                    </button>
                  </li>

                  <li className="flex justify-center">
                    <button
                      className="cursor-pointer w-32 px-6 py-2 rounded-sm text-center text-sm text-gray-700 hover:bg-gray-100"
                      type="button"
                    >
                      Đăng Ký
                    </button>
                  </li>
                </ul>
              </div>
            </div>
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
          <div
            className={`items-center justify-between ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#FE6B6E] md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal - Đã di chuyển ra khỏi dropdown menu */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-xs">
          <div
            className="relative p-4 w-full max-w-md max-h-full "
            style={{
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-lg">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  Đăng nhập
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeLoginModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Đóng</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-[#FE6B6E] hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
                  >
                    Đăng nhập
                  </button>
                  <div className="flex items-center">
                    <div className="w-full h-0.5 bg-gray-200"></div>
                    <div className="px-5 text-center text-gray-500">hoặc</div>
                    <div className="w-full h-0.5 bg-gray-200"></div>
                  </div>
                  {/* Đăng nhập với Google và Facebook */}
                  <div className="flex flex-col space-y-3">
                    <button
                      type="button"
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white bg-[#dd4b39] rounded-lg hover:bg-[#c23321] focus:ring-2 focus:ring-red-300 focus:outline-none transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 me-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="white"
                          d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                        />
                      </svg>
                      Sign in with Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white bg-[#3b5998] rounded-lg hover:bg-[#2d4373] focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 me-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Sign in with Facebook
                    </button>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    Not registered?{" "}
                    <a href="#" className="text-blue-700 hover:underline">
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
