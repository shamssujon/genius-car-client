import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg1 from "../Assets/images/homeCarousel/1.jpg";
import sliderImg2 from "../Assets/images/homeCarousel/2.jpg";
import sliderImg3 from "../Assets/images/homeCarousel/3.jpg";
import sliderImg4 from "../Assets/images/homeCarousel/4.jpg";

const Hero = () => {
    return (
        <section className="py-10">
            <div className="container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{ nextEl: ".arrowRight", prevEl: ".arrowLeft" }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}>
                    <SwiperSlide>
                        <div className="relative overflow-hidden rounded-lg p-6 text-white md:p-12 lg:p-24">
                            <img
                                src={sliderImg1}
                                alt=""
                                className="absolute inset-0 -z-20 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
                            <div className="space-y-6 lg:w-1/2">
                                <h2 className="text-4xl font-bold leading-snug md:text-6xl md:leading-tight">
                                    Affordable <br /> Price For Car <br /> Servicing
                                </h2>
                                <p className="max-w-lg text-lg">
                                    There are many variations of passages of available, but the
                                    majority have suffered alteration in some form
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link className="btn-primary btn h-auto w-full px-6 py-3 text-lg capitalize md:w-auto">
                                        Discover More
                                    </Link>
                                    <Link className="btn-outline btn h-auto w-full border-white px-6 py-3 text-lg capitalize text-white hover:border-white hover:bg-white hover:text-black md:w-auto">
                                        Latest Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden rounded-lg p-6 text-white md:p-12 lg:p-24">
                            <img
                                src={sliderImg2}
                                alt=""
                                className="absolute inset-0 -z-20 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
                            <div className="space-y-6 lg:w-1/2">
                                <h2 className="text-4xl font-bold leading-snug md:text-6xl md:leading-tight">
                                    Affordable <br /> Price For Car <br /> Servicing
                                </h2>
                                <p className="max-w-lg text-lg">
                                    There are many variations of passages of available, but the
                                    majority have suffered alteration in some form
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link className="btn-primary btn h-auto w-full px-6 py-3 text-lg capitalize md:w-auto">
                                        Discover More
                                    </Link>
                                    <Link className="btn-outline btn h-auto w-full border-white px-6 py-3 text-lg capitalize text-white hover:border-white hover:bg-white hover:text-black md:w-auto">
                                        Latest Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden rounded-lg p-6 text-white md:p-12 lg:p-24">
                            <img
                                src={sliderImg3}
                                alt=""
                                className="absolute inset-0 -z-20 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
                            <div className="space-y-6 lg:w-1/2">
                                <h2 className="text-4xl font-bold leading-snug md:text-6xl md:leading-tight">
                                    Affordable <br /> Price For Car <br /> Servicing
                                </h2>
                                <p className="max-w-lg text-lg">
                                    There are many variations of passages of available, but the
                                    majority have suffered alteration in some form
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link className="btn-primary btn h-auto w-full px-6 py-3 text-lg capitalize md:w-auto">
                                        Discover More
                                    </Link>
                                    <Link className="btn-outline btn h-auto w-full border-white px-6 py-3 text-lg capitalize text-white hover:border-white hover:bg-white hover:text-black md:w-auto">
                                        Latest Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative overflow-hidden rounded-lg p-6 text-white md:p-12 lg:p-24">
                            <img
                                src={sliderImg4}
                                alt=""
                                className="absolute inset-0 -z-20 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-black to-transparent opacity-70"></div>
                            <div className="space-y-6 lg:w-1/2">
                                <h2 className="text-4xl font-bold leading-snug md:text-6xl md:leading-tight">
                                    Affordable <br /> Price For Car <br /> Servicing
                                </h2>
                                <p className="max-w-lg text-lg">
                                    There are many variations of passages of available, but the
                                    majority have suffered alteration in some form
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link className="btn-primary btn h-auto w-full px-6 py-3 text-lg capitalize md:w-auto">
                                        Discover More
                                    </Link>
                                    <Link className="btn-outline btn h-auto w-full border-white px-6 py-3 text-lg capitalize text-white hover:border-white hover:bg-white hover:text-black md:w-auto">
                                        Latest Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="absolute bottom-6 right-6 z-30 flex gap-4">
                        <button className="arrowLeft grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-white/30 p-3 text-white transition hover:bg-primary focus:bg-primary-focus">
                            <BsArrowLeftShort className="h-full w-full" />
                        </button>
                        <button className="arrowRight  grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-white/30 p-3 text-white transition hover:bg-primary focus:bg-primary-focus">
                            <BsArrowRightShort className="h-full w-full" />
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;
