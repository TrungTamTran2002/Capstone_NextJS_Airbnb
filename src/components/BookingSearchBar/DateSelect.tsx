import { addDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // style chính
import "react-date-range/dist/theme/default.css"; // style theme

interface DateRange {
  startDate?: Date;
  endDate?: Date;
  key?: string;
}

const DateSelect = () => {
  const [state, setState] = useState<DateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formatDate = (date?: Date) => {
    return date ? date.toLocaleDateString("vi-VN") : "Chưa chọn";
  };

  return (
    <div className="col-span-4 flex-1 smm:h-16 p-3 flex flex-col justify-center items-center cursor-pointer relative">
      <p className="cursor-pointer " onClick={handleToggle}>
        {`${formatDate(state[0].startDate)} - ${formatDate(state[0].endDate)}`}
      </p>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 top-[70px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg border-2 border-gray-300 overflow-y-auto cursor-auto overflow-hidden"
        >
          <DateRangePicker
            onChange={(item: RangeKeyDict) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  );
};

export default DateSelect;
