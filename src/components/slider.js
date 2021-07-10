// Import Swiper React components
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import slide1 from "../assets/images/v1.jpeg"
import slide2 from "../assets/images/v2.jpeg"
import slide3 from "../assets/images/v3.jpeg"
import slide4 from "../assets/images/v4.jpeg"

// Import Swiper styles
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core"

// install Swiper modules
SwiperCore.use([Autoplay])

const Slider = () => {
  return (
    <Swiper slidesPerView={1} Pagination={true} autoplay={{ delay: 2500 }}>
      <SwiperSlide>
        <img src={slide1} class=" lg:h-lg my-0 mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} class=" lg:h-lg my-0 mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} class=" lg:h-lg my-0 mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} class=" lg:h-lg my-0 mx-auto" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
