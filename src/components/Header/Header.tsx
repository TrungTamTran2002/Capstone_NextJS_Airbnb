import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store"; // Import Redux Store
import { useState, useEffect, useRef } from "react";
import LoginModal from "../Auth/Login/LoginModal";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import RegisterModal from "../Auth/Register/RegisterModal";

const Header = () => {
  // thay đổi trạng thái cho dropdown user menu, mobile menu và login modal
  // Sử dụng useState để quản lý trạng thái mở/đóng của các menu và modal
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Lấy thông tin người dùng từ Redux Store
  const user = useSelector((state: RootState) => state.user);

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
    setIsUserMenuOpen(false);
  };

  // fcs đóng login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // fcs mở register modal
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsUserMenuOpen(false);
  };

  // fcs đóng register modal
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // fcs để ngăn chặn sự kiện click bên ngoài dropdown user menu
  const handleDropdownClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // Sử dụng useRef để theo dõi phần tử dropdown user menu
  // và thêm sự kiện click bên ngoài để đóng menu khi người dùng click ra ngoài
  const userMenuRef = useRef<HTMLDivElement>(null);

  // useEffect để thêm sự kiện click bên ngoài dropdown user menu
  // và đóng menu khi người dùng click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    // Thêm sự kiện mousedown để xử lý click bên ngoài
    // để đảm bảo menu đóng ngay cả khi người dùng click vào các phần tử bên trong
    document.addEventListener("mousedown", handleClickOutside);

    // Dọn dẹp sự kiện khi component unmount
    // để tránh rò rỉ bộ nhớ
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {/* Hiển thị thông tin người dùng nếu đã đăng nhập */}
            {user.isLoggedIn ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-900 font-medium group border border-white hover:text-[#FE6B6E] hover:border-[#FE6B6E] transition duration-300 cursor-pointer"
                  onClick={toggleUserMenu}
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-[#FE6B6E] transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 11.25c-4.97 0-9 2.25-9 5.25v1.5h18v-1.5c0-3-4.03-5.25-9-5.25z"
                    />
                  </svg>
                  <span className="group-hover:text-[#FE6B6E] transition duration-300">
                    {user.name}
                  </span>
                </button>
                {isUserMenuOpen && (
                  <div
                    className="absolute -left-10/12 mt-2 w-auto bg-white border rounded-lg shadow-lg"
                    onClick={handleDropdownClick}
                  >
                    <div className="px-4 py-2 text-gray-900 font-medium">
                      {user.name}
                    </div>
                    <div className="px-4 py-2 text-gray-500 text-sm">
                      {user.email}
                    </div>
                    <hr className="my-2" />
                    <ul className="text-gray-700 text-sm my-2">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Dashboard
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Settings
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Earnings
                      </li>
                      <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer">
                        Sign out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <UserMenu
                toggleUserMenu={toggleUserMenu}
                isUserMenuOpen={isUserMenuOpen}
                openLoginModal={openLoginModal}
                openRegisterModal={openRegisterModal}
              />
            )}
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
          <NavLinks isMobileMenuOpen={isMobileMenuOpen} />
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        switchToRegister={openRegisterModal}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        switchToLogin={openLoginModal}
      />
    </>
  );
};

export default Header;
