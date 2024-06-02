import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UpComing = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className="container mx-auto">
        <h2 className="cyan-400 text-4xl font-bold text-center mt-16 pb-6 ">Soon To Arrive</h2>
        <Slider {...settings}>
          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/GR5zh8W/ruprekha1.jpg" alt="" />
           <h3 className="absolute text-3xl  bottom-5   text-cyan-400 font-bold">Ruprekha</h3>
          </div>
          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/xGTVNLT/Asset-1-32-new-600x800.webp" alt="" />
           <h3 className="absolute text-3xl  bottom-5   text-cyan-400 font-bold">Regular Fit Shirt</h3>
          </div>

          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/Q68hq5Z/417226984-761408912690141-5432943314025217787-n-768x1147.jpg" alt="" />
           <h3 className="absolute text-xl bottom-5   text-cyan-400 font-bold">Kuhok- Green</h3>
          </div>

          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/bRMQCSB/401379101-738609258303440-4343179833735951341-n.jpg" alt="" />
           <h3 className="absolute text-xl  bottom-5 text-bold text-cyan-400 font-bold">Golapi Golap</h3>
          </div>
          <div>
            <img className="h-80 w-72" src="https://i.ibb.co/sQDwMH4/NUR-108808-1-647ec17b2af95-thumb.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-cyan-400 font-bold">Noor</h3>
          </div>

          <div>
            <img className="h-80 w-72" src="https://i.ibb.co/d04gsGS/418725843-761407089356990-4402645564418750324-n-757x1024.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-cyan-400 font-bold">Kuhok- Mastered</h3>
          </div>

          <div>
            <img className="h-80 w-72" src="https://i.ibb.co/JprVyy5/10.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-cyan-400 font-bold">Sky Blue T-shirt</h3>
          </div>
          <div>
            <img className="h-80 w-72 relative" src="https://i.ibb.co/KDztnSR/Shuvankar-1-109236-1-64f6d28c886b1-thumb.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-cyan-400 font-bold">Shuvonkor</h3>
          </div>
        </Slider>
      </div>
    );
  }


export default UpComing;