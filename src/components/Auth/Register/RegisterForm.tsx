import React from "react";
import InputField from "./InputField";
import FormGroup from "./FormGroup";
import GenderSelect from "./GenderSelect";

interface RegisterFormProps {
  formData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    gender: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
      phone: string;
      birthday: string;
      gender: string;
    }>
  >;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  switchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  setFormData,
  handleSubmit,
  handleChange,
  switchToLogin,
}) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField
        label="Họ tên"
        type="text"
        name="name"
        id="name"
        placeholder="Nguyễn Văn A"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="name@company.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <InputField
        label="Mật khẩu"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        required
        minLength={6}
      />

      <InputField
        label="Số điện thoại"
        type="tel"
        name="phone"
        id="phone"
        placeholder="0123456789"
        value={formData.phone}
        onChange={handleChange}
        required
        pattern="[0-9]{10}"
      />

      <FormGroup>
        <InputField
          label="Ngày sinh"
          type="date"
          name="birthday"
          id="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />

        <GenderSelect
          value={formData.gender}
          onChange={(e) =>
            setFormData({
              ...formData,
              gender: e.target.value,
            })
          }
        />
      </FormGroup>

      <button
        type="submit"
        className="w-full text-white bg-[#FE6B6E] hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
      >
        Đăng ký
      </button>

      <div className="flex items-center">
        <div className="w-full h-0.5 bg-gray-200"></div>
        <div className="px-5 text-center text-gray-500">hoặc</div>
        <div className="w-full h-0.5 bg-gray-200"></div>
      </div>

      <div className="text-sm font-medium text-gray-500">
        Đã có tài khoản?{" "}
        <button
          className="cursor-pointer text-blue-700 hover:underline font-medium ml-1"
          type="button"
          onClick={switchToLogin}
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
