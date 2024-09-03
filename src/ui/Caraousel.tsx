// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type CarouselData = {
  src: string;
  name: string;
  comment: string;
};
type CarouselProps = {
  carouselData: CarouselData[];
};

const Caraousel = ({ carouselData }: CarouselProps) => {
  return (
    <section className="mt-8">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carouselData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="bg-red-200 rounded-md p-4 text-sm shadow-inner min-h-44">
              <div className="flex gap-4 items-center">
                <img
                  src={data.src}
                  width="30"
                  height="30"
                  className="rounded-full"
                />
                <p className="font-bold">{data.name}</p>
              </div>
              <p className="mt-2 italic text-xs">{data.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Caraousel;
