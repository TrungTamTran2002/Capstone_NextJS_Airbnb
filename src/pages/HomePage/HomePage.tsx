import BannerVideo from "../../components/BannerVideo/BannerVideo";
import BookingSearchBar from "../../components/BookingSearchBar/BookingSearchBar";
import ListLocation from "../../components/ListLocation/ListLocation";

export default function HomePage() {
  return (
    <div>
      <BannerVideo />
      <div className="flex justify-center">
        <BookingSearchBar />
      </div>
      <div className=" flex justify-center mt-1 bg-white z-[999]">
        <ListLocation />
      </div>
    </div>
  );
}
