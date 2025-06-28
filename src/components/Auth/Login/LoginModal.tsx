import { useState } from "react";
import LoginForm from "./LoginForm";
import { loginService } from "../../../services/authService";
import { login } from "../../../redux/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  switchToRegister: () => void;
}

const LoginModal = ({ isOpen, onClose, switchToRegister }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = { email, password };

    loginService(loginData)
      .then((response) => {
        const { data } = response;

        // Lấy tên người dùng từ phản hồi API
        const userName = data.content.user.name;

        // Log toàn bộ thông tin từ API
        console.log("API Response:", response);

        // Dispatch action để lưu thông tin user vào Redux Store
        dispatch(login({ name: userName, email: data.content.user.email }));

        // Hiển thị thông báo toaster
        toast.success(`Đăng nhập thành công! Xin chào ${userName}`);

        onClose(); // Đóng modal sau khi đăng nhập thành công
      })
      .catch((err) => {
        console.error("Login Error:", err.response); // Log chi tiết lỗi từ API
        // Hiển thị thông báo toaster lỗi
        toast.error("Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.");
      });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden backdrop-brightness-110"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-md max-h-full animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Login</h3>
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

          {/* Modal body LOGIN FORM */}
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            onSubmit={handleLogin}
            switchToRegister={switchToRegister}
            error={error} // Truyền thêm error vào LoginForm
            onClose={onClose} // Truyền hàm onClose để đóng modal sau khi chuyển to register
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
