import Image from "../Image";
import Container from "../Container";

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
//Slider


// React Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Heading from "./Heading";

// React Icons

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>

      <Container>
        <div className="bg-[url(src/assets/bg.png)] h-[500px]  bg-no-repeat  bg-cover bg-center">
          <div className="relative">
            <div className="absolute flex items-center top-20 -left-15 flex-col gap-y-10 text-txtColor">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaTwitter />
              <p className="mt-4 text-sm tracking-wide -rotate-90">
                Follow Us
              </p>
            </div>

            <Slider className=" top-20 pl-25 " {...settings}>
              <div className="block">
                <div className="flex items-center gap-x-5">
                  <div className="w-15 h-0.5 bg-txtColorRed"></div>
                  <Heading className={`text-[16px] text-txtColorRed`} txt={"NEW TREND"} as={"h3"} />
                </div>
                <Heading className={`text-[70px]`} txt={"SUMMER SALE STYLISH"} as={"h1"} />
                <Heading className={`text-[70px]`} txt={"WOMENS"} as={"h3"} />
              </div>
              <div className="">
                <div className="w-20 h-0.5 bg-red-500"></div>
                <Heading className={`text-[28px]`} txt={"TREND"} as={"h3"} />
                <Heading className={`text-[70px]`} txt={"SUMMER SALE STYLISH"} as={"h1"} />
                <Heading className={`text-[70px]`} txt={"WOMENS"} as={"h3"} />
              </div>
              <div className="">
                <div className="w-20 h-0.5 bg-red-500"></div>
                <Heading className={`text-[28px]`} txt={"TREND"} as={"h3"} />
                <Heading className={`text-[70px]`} txt={"SUMMER SALE STYLISH"} as={"h1"} />
                <Heading className={`text-[70px]`} txt={"WOMENS"} as={"h3"} />
              </div>
            </Slider>
          </div>


        </div>
      </Container>
    </>
  );
};

export default Hero;
