interface UserMenuProps {
  isUserMenuOpen: boolean;
  toggleUserMenu: () => void;
  openLoginModal: () => void;
}

const UserMenu = ({
  isUserMenuOpen,
  toggleUserMenu,
  openLoginModal,
}: UserMenuProps) => {
  return (
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
  );
};

export default UserMenu;
