import { useState } from "react";
import { BsFacebook, FaFacebook } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import {useWindowWidth} from '@react-hook/window-size'


export default function HeroSection() {

  const [selected, setSelected] = useState("TR");

  const phones = {

    US: '+1',
    TR: '+90',
    DE: '+36',
    IN: '+19'
  }

  const windowWidth = useWindowWidth()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
        </div>
      </Slider>}
      <div className="md:container flex justify-between items-center relative  md:absolute top-0 left-0 md:left-1/2 translate-x-0  md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img className="w-48" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl ml-3 mt-12 mb-6 text-white font-semibold tracking-wide ">Dakikalar içinde <br /> kapınızda <br /></h3>
        </div>

        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">

          <h4 className="text-primary-brand-color text-center font-semibold mb-4" >Giriş yap veya Kayıt ol</h4>
          <div className="grid gap-y-4">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative group block cursor-pointer">
                <input required maxLength={11} className="h-14 px-4 border-2  border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-400 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
              </label>
            </div>
            <button className="bg-brand-yellow transition-brand-colors hover:text-brand-yellow hover:bg-primary-brand-color text-primary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-200 my-2" />
            <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-colors hover:text-white hover:bg-blue-700 h-12 flex items-center rounded-md w-full text-sm font-semibold">
              <FaFacebook size={24} />
              <a href="https://www.facebook.com/" className="mx-auto">
                Facebook ile devam et</a>
            </button>
          </div>
      </div>
        </div>
    </div>
  )
}
