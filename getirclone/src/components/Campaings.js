import React from 'react'
import Slider from 'react-slick';
import Banners from 'api/banners.json'
import { useState, useEffect } from 'react';
import Title from 'components/ui/Title';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import {useWindowWidth} from '@react-hook/window-size'

function NextBtn(className, style, onClick) {
  return (
    <button className={'text-brand-color absolute top-1/2 -right-6 -translate-x-1/2'} onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>

  )
}

function PrevBtn(className, style, onClick) {
  return (
    <button className={'text-brand-color absolute top-1/2 -lefts-6 -translate-x-1/2'} onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button>
  )
}


export default function Campaings() {

  const windowWidth = useWindowWidth()

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className='container mx-auto md:pt-8'>
      <div className='hidden md:block'>
      <Title>Kampanyalar</Title>
      </div>
      <Slider className='md:-mx-2 relative' {...settings} >
        {banners.length && banners.map((banner, index) => (
          <div className='md:px-2' key={banner.id}>
            <img className='md:rounded-lg' src={banner.image} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
