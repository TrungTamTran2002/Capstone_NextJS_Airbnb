const SocialLogin = () => {
  return (
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
        Đăng nhập với Google
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
        Đăng nhập với Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
