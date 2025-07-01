import { Card } from "antd";
import SuggestedLocations from "./SuggestedLocations";

const ListLocation = () => {
  return (
    <div className="container ">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/rooms/ho-chi-minh">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp"
                alt="Hồ Chí Minh"
              />
              <div>
                <h2 className="font-bold">Hồ Chí Minh</h2>
                <p className="text-gray-700 text-sm">15 phút lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/can-tho">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp"
                alt="Cần Thơ"
              />
              <div>
                <h2 className="font-bold">Cần Thơ</h2>
                <p className="text-gray-700 text-sm">3 giờ lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/nha-trang">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp"
                alt="Nha Trang"
              />
              <div>
                <h2 className="font-bold">Nha Trang</h2>
                <p className="text-gray-700 text-sm">6.5 giờ lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/ha-noi">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp"
                alt="Hà Nội"
              />
              <div>
                <h2 className="font-bold">Hà Nội</h2>
                <p className="text-gray-700 text-sm">15 phút lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/phu-quoc">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp"
                alt="Phú Quốc"
              />
              <div>
                <h2 className="font-bold">Phú Quốc</h2>
                <p className="text-gray-700 text-sm">7.5 giờ lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/da-nang">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp"
                alt="Đà Nẵng"
              />
              <div>
                <h2 className="font-bold">Đà Nẵng</h2>
                <p className="text-gray-700 text-sm">45 phút lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/da-lat">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp"
                alt="Đà Lạt"
              />
              <div>
                <h2 className="font-bold">Đà Lạt</h2>
                <p className="text-gray-700 text-sm">30 phút lái xe</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="/rooms/phan-thiet">
          <Card hoverable className="w-full">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg object-cover"
                src="https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp"
                alt="Phan Thiết"
              />
              <div>
                <h2 className="font-bold">Phan Thiết</h2>
                <p className="text-gray-700 text-sm">5 giờ lái xe</p>
              </div>
            </div>
          </Card>
        </a>
      </div>
      <div className="space-y-3 pt-6 pb-16">
        <h1 className="font-bold text-3xl">Ở bất cứ đâu</h1>
        <SuggestedLocations />
      </div>
    </div>
  );
};

export default ListLocation;
