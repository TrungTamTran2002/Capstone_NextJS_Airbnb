import { useEffect, useRef, useState } from "react";
import { getLocations } from "../../services/locationService";

interface Location {
  tinhThanh: string;
  hinhAnh: string;
}

const LocationInput = () => {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<string>("Bạn sắp đi đâu?");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getLocations()
      .then((response) => {
        if (response.data.content) {
          setLocations(response.data.content);
        } else {
          console.error("API response không chứa content:", response.data);
        }
      })
      .catch((err) => {
        console.error("Lỗi gọi API địa điểm:", err);
      });
  }, []);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSelect = (tinhThanh: string) => {
    setSelectedLocation(tinhThanh);
    setOpen(false); // Đóng dropdown sau khi chọn
  };

  return (
    <div
      ref={wrapperRef}
      className="col-span-3 flex-1 px-6 py-3 flex flex-col justify-center items-center cursor-pointer relative"
      onClick={() => setOpen(!open)}
    >
      <p className="text-sm">Địa điểm</p>

      <p
        className={`text-sm ${
          selectedLocation === "Bạn sắp đi đâu?" ? "text-gray-400" : "font-bold"
        }`}
      >
        {selectedLocation}
      </p>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-[320px] max-h-[400px] overflow-y-auto bg-white shadow-xl rounded-xl p-4 z-50">
          <h3 className="font-semibold mb-3">Tìm kiếm địa điểm</h3>
          <div className="grid grid-cols-3 gap-4">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => handleLocationSelect(loc.tinhThanh)}
              >
                <img
                  src={loc.hinhAnh}
                  alt={loc.tinhThanh}
                  className="w-20 h-20 object-cover rounded-lg mx-auto"
                />
                <p className="text-sm mt-1">{loc.tinhThanh}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
