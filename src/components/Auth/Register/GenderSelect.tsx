import React from "react";

interface GenderSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex-1">
      <label
        htmlFor="gender"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Giới tính
      </label>
      <select
        name="gender"
        id="gender"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
        onChange={onChange}
      >
        <option value="true">Nam</option>
        <option value="false">Nữ</option>
      </select>
    </div>
  );
};

export default GenderSelect;
