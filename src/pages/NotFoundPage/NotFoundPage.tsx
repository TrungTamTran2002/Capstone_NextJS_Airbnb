import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-[#FE6B6E] mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Trang không tìm thấy. Vui lòng kiểm tra lại đường dẫn hoặc quay lại
        trang chủ.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-[#FE6B6E] rounded-lg shadow-lg hover:bg-rose-600 transition duration-300"
      >
        Quay Lại Trang Chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
