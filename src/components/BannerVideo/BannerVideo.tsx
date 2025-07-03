import styles from "./BannerVideo.module.scss";

const BannerVideo = () => {
  return (
    <div>
      <div className="w-full relative flex items-center smm:h-[50vh] md:h-[60vh] lg:h-[50vh] 2xl:h-[80vh] overflow-hidden">
        <video
          autoPlay
          loop
          playsInline
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src="https://demo4.cybersoft.edu.vn/static/media/VIETNAM%20-%20My%20Home%20-%20Masew,%20MyoMouse,%20Nguyen%20Loi.aeb6fbce54ecf85640df.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="mask bg-black/70 smm:h-[50vh] md:h-[60vh] lg:h-[50vh] 2xl:h-[80vh]" />
        <div className="container max-w-screen-xl mx-auto z-10 smm:px-20 lg:px-10">
          <div className="grid grid-cols-2">
            <div className="justify-center flex flex-col smm:col-span-2 smm:items-center smm:gap-5">
              <div className="flex items-center smm:justify-center">
                <img
                  src="https://demo4.cybersoft.edu.vn/static/media/airbnb-1.aabeefedaf30b8c7011a022cdb5a6425.svg"
                  className="w-14 mr-5 smm:w-8"
                />
                <div className="smm:h-5 smm:flex smm:items-center">
                  <h2 className="smm:h-full smm:pb-10 lg:pb-6 lg:text-8xl md:text-5xl smm:text-5xl mb:text-3xl text-[#FE6B6E] font-bold animate__animated animate__fadeInUp">
                    airbnb
                  </h2>
                </div>
              </div>
              <p className="animate__animated animate__fadeInUp animate__delay-1s text-white lg:text-3xl md:text-xl smm:text-lg smm:flex smm:justify-center">
                Belong anywhere
              </p>
            </div>
            <div className="item w-full flex justify-center animate__animated animate__fadeInUp animate__delay-2s" />
          </div>
        </div>
      </div>
      <div className="image-container" style={{ position: "relative" }}>
        <img
          src="https://i.ibb.co/v4KS2mc/swoosh-hero.png"
          className={`w-full ${styles["banner-responsive"]} ${styles.circular} z-0`}
          alt="Banner"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        ></div>
      </div>
    </div>
  );
};

export default BannerVideo;
