import SocialLogin from "./SocialLogin";

interface LoginFormProps {
  switchToRegister: () => void;
}

const LoginForm = ({ switchToRegister }: LoginFormProps) => {
  return (
    <div className="p-4 md:p-5">
      <form className="space-y-4" action="#">
        {/* Form fields... */}
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
            Mật khẩu
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

        <SocialLogin />

        <div className="text-sm font-medium text-gray-500 text-center">
          Chưa có tài khoản?{" "}
          <button
            type="button"
            onClick={switchToRegister}
            className="text-blue-700 hover:underline font-medium ml-1"
          >
            Đăng ký ngay
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
