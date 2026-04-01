import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
    const banners = [
        {
            id: 1,
            title: "Big Sale",
            subtitle: "Up to 50% Off",
            image: "https://images.unsplash.com/photo-1607082349566-187342175e2f"
        },
        {
            id: 2,
            title: "New Arrivals",
            subtitle: "Latest Gadgets",
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35b3"
        },
        {
            id: 3,
            title: "Exclusive Deals",
            subtitle: "Limited Time Offer",
            image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
        }
    ];
    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative h-[250px] md:h-[400px]">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                                <h2 className="text-3xl font-bold">{banner.title}</h2>
                                <p className="text-lg mt-2">{banner.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}