import { Link } from "react-router";

interface NavLinkProps {
  isMobileMenuOpen: boolean;
  isScrolled: boolean; // Thêm prop isScrolled để nhận trạng thái cuộn
}

const NavLinks = ({ isMobileMenuOpen, isScrolled }: NavLinkProps) => {
  return (
    <div
      className={`items-center justify-between ${
        isMobileMenuOpen ? "block" : "hidden"
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-user"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <Link
            to="/"
            className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 ${
              isScrolled ? "text-black hover:text-[#FE6B6E]" : "text-white"
            }`}
            aria-current="page"
          >
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`block py-2 px-3 font-bold rounded-sm hover:bg-transparent md:hover:bg-transparent md:p-0 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full ${
              isScrolled ? "text-black hover:text-[#FE6B6E]" : "text-white"
            }`}
          >
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`block py-2 px-3 font-bold rounded-sm hover:bg-transparent md:hover:bg-transparent md:p-0 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full ${
              isScrolled ? "text-black hover:text-[#FE6B6E]" : "text-white"
            }`}
          >
            Dịch vụ
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className={`block py-2 px-3 font-bold rounded-sm hover:bg-transparent md:hover:bg-transparent md:p-0 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full ${
              isScrolled ? "text-black hover:text-[#FE6B6E]" : "text-white"
            }`}
          >
            Chi phí
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className={`block py-2 px-3 font-bold rounded-sm hover:bg-transparent md:hover:bg-transparent md:p-0 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full ${
              isScrolled ? "text-black hover:text-[#FE6B6E]" : "text-white"
            }`}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
