import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { registerService } from "../../../services/authService";
import { toast } from "react-toastify";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "true", // "true": Nam, "false": Nữ
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      birthday: formData.birthday,
      gender: formData.gender === "true", // Chuyển đổi thành boolean
    };

    /* 
    try {
      const response = await registerService(userData);
      console.log("Đăng ký thành công:", response.data);
      alert("Đăng ký thành công!");
      switchToLogin(); // Chuyển sang form đăng nhập sau khi đăng ký thành công
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      alert("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }*/

    registerService(userData)
      .then((response) => {
        console.log("Đăng ký thành công:", response.data);
        toast.success("Đăng ký thành công!");
        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          birthday: "",
          gender: "true", // Reset về giá trị mặc định
        });
        onClose(); // Đóng modal sau khi đăng ký thành công
        switchToLogin(); // Chuyển sang form đăng nhập sau khi đăng ký thành công
      })
      .catch((error) => {
        console.error("Lỗi khi đăng ký:", error);
        toast.error("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
      });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-brightness-95 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-md max-h-full animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-lg shadow-lg">
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

          <div className="p-4 md:p-5 max-h-[70vh] overflow-y-auto">
            <RegisterForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              switchToLogin={() => {
                onClose();
                switchToLogin();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
