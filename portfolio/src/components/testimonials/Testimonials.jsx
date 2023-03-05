import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Omar Ashraf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem consectetur, praesentium quibusdam dignissimos quae corrupti! Nesciunt et unde eaque?",
  },
  {
    avatar: AVTR2,
    name: "Omar Ashraf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem consectetur, praesentium quibusdam dignissimos quae corrupti! Nesciunt et unde eaque?",
  },
  {
    avatar: AVTR3,
    name: "Omar Ashraf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem consectetur, praesentium quibusdam dignissimos quae corrupti! Nesciunt et unde eaque?",
  },
  {
    avatar: AVTR4,
    name: "Omar Ashraf",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem consectetur, praesentium quibusdam dignissimos quae corrupti! Nesciunt et unde eaque?",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        className="container testimonials__container"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="cleint__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
