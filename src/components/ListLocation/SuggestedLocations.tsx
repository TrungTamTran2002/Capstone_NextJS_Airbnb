import { Card } from "antd";

const SuggestedLocations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
      <a
        data-aos="flip-left"
        href="/rooms/ho-chi-minh"
        className="aos-init aos-animate"
      >
        <Card
          hoverable
          className="shadow-xl hover:shadow-rose-700 transition-shadow duration-300 bg-white"
          cover={
            <img src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329222%2Fmjwqhra4wbzlvoo2pe27.jpg&w=1920&q=75" />
          }
        >
          <Card.Meta title="Toàn bộ nhà" />
        </Card>
      </a>
      <a
        data-aos="flip-left"
        href="/rooms/nha-trang"
        className="aos-init aos-animate"
      >
        <Card
          hoverable
          className="shadow-lg hover:shadow-2xl transition-shadow duration-300"
          cover={
            <img src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329186%2Ffmoml05qcd0yk2stvl9r.jpg&w=1920&q=75" />
          }
        >
          <Card.Meta title="Chỗ ở độc đáo" />
        </Card>
      </a>
      <a
        data-aos="flip-left"
        href="/rooms/da-lat"
        className="aos-init aos-animate"
      >
        <Card
          hoverable
          className="shadow-lg hover:shadow-2xl transition-shadow duration-300"
          cover={
            <img src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329121%2Fguagj5r2bkccgr1paez3.jpg&w=1920&q=75" />
          }
        >
          <Card.Meta title="Trang trại và thiên nhiên" />
        </Card>
      </a>
      <a
        data-aos="flip-left"
        href="/rooms/da-nang"
        className="aos-init aos-animate"
      >
        <Card
          hoverable
          className="shadow-lg hover:shadow-2xl transition-shadow duration-300"
          cover={
            <img src="https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329252%2Fgqhtg9ua6jdrffhbrfv1.jpg&w=1920&q=75" />
          }
        >
          <Card.Meta title="Cho phép mang theo thú cưng" />
        </Card>
      </a>
    </div>
  );
};

export default SuggestedLocations;
