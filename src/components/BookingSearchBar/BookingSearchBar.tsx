import LocationInput from "./LocationInput";
import GuestSelector from "./GuestSelector";
import FilterOptions from "./FilterOptions";
import DateSelect from "./DateSelect";

const BookingSearchBar = () => {
  return (
    <div className="container py-10 relative">
      {/* Thanh tìm kiếm chính */}
      <div className="grid grid-cols-12 smm:grid-cols-1 border-2 border-gray-300 md:rounded-full">
        <LocationInput />
        <div className="col-span-1 flex smm:hidden justify-center">
          <div className="my-3 border-l border-gray-400"></div>
        </div>
        <DateSelect />
        <div className="col-span-1 flex smm:hidden justify-center">
          <div className="my-3 border-l border-gray-400"></div>
        </div>
        <GuestSelector />
      </div>

      {/* Bộ lọc bên dưới */}
      <div className="mt-4">
        <FilterOptions />
      </div>
    </div>
  );
};

export default BookingSearchBar;
