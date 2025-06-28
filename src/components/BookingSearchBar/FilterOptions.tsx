const FilterOptions = () => {
  const options = [
    "Loại nơi ở",
    "Giá",
    "Đặt ngay",
    "Phòng và phòng ngủ",
    "Bộ lọc khác",
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-10">
      {options.map((label) => (
        <button
          key={label}
          className="border border-gray-300 bg-white text-black px-6 py-2 rounded-lg hover:shadow-sm text-sm hover:border-gray-900 transition-all duration-300 cursor-pointer"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
