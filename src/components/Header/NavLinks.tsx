import { Link } from "react-router";

interface NavLinkProps {
  isMobileMenuOpen: boolean;
}

const NavLinks = ({ isMobileMenuOpen }: NavLinkProps) => {
  return (
    <div
      className={`items-center justify-between ${
        isMobileMenuOpen ? "block" : "hidden"
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-user"
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#FE6B6E] md:p-0"
            aria-current="page"
          >
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full"
          >
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full"
          >
            Dịch vụ
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full"
          >
            Chi phí
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:hover:text-[#FE6B6E] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#FE6B6E] after:transition-all after:duration-500 hover:after:w-full"
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
