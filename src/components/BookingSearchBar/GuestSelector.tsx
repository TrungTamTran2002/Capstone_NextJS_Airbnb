const GuestSelector = () => {
  return (
    <div className="col-span-3 flex-1 p-3 flex justify-center items-center cursor-pointer relative gap-3">
      <p>Thêm khách</p>
      <button className="bg-[#dd4b39] ml-5 hover:bg-[#9e3e4e] duration-300 text-white rounded-full p-2 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.607-10.607 7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default GuestSelector;
