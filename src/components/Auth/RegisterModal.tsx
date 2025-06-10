import React, { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  switchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  switchToLogin,
}) => {
  // State để lưu thông tin form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthday: "",
    gender: true, // true: Nam, false: Nữ
  });

  // Xử lý thay đổi input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    // Xử lý đặc biệt cho checkbox
    if (type === "checkbox" && name === "gender") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Xử lý submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra mật khẩu khớp nhau
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }

    // Dữ liệu gửi lên API (không bao gồm id và role vì server sẽ tự xử lý)
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      birthday: formData.birthday,
      gender: formData.gender,
      // id và role sẽ được xử lý bởi backend
    };

    console.log("Dữ liệu đăng ký:", userData);
    // TODO: Gửi dữ liệu lên API
    // apiRegister(userData).then(...)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-brightness-95 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  ">
      <div
        className="relative p-4 w-full max-w-md max-h-full animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Đăng ký tài khoản
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
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
          <div className="p-4 md:p-5 max-h-[70vh] overflow-y-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Họ tên */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Họ tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mật khẩu */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>

              {/* Xác nhận mật khẩu */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Xác nhận mật khẩu <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Số điện thoại */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="0123456789"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              {/* Ngày sinh */}
              <div>
                <label
                  htmlFor="birthday"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Ngày sinh
                </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>

              {/* Giới tính */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Giới tính
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="gender-male"
                      value="true"
                      checked={formData.gender === true}
                      onChange={() =>
                        setFormData({ ...formData, gender: true })
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="gender-male"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Nam
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="gender-female"
                      value="false"
                      checked={formData.gender === false}
                      onChange={() =>
                        setFormData({ ...formData, gender: false })
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="gender-female"
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      Nữ
                    </label>
                  </div>
                </div>
              </div>

              {/* Nút đăng ký */}
              <button
                type="submit"
                className="w-full text-white bg-[#FE6B6E] hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
              >
                Đăng ký
              </button>

              <div className="flex items-center">
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="px-5 text-center text-gray-500">hoặc</div>
                <div className="w-full h-0.5 bg-gray-200"></div>
              </div>

              {/* Link to login */}
              <div className="text-sm font-medium text-gray-500">
                Đã có tài khoản?{" "}
                <button
                  className="cursor-pointer text-blue-700 hover:underline font-medium ml-1"
                  type="button"
                  onClick={switchToLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
