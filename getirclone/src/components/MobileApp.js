import React from 'react'

export default function MobileApp() {
  return (
    <div className='bg-primary-brand-color flex flex-col md:flex-row justify-between bg-mobile-app items-center sm:rounded-lg text-white'>
      <div className='flex flex-col gap-y-3 p-10 text-center md:text-left'>
        <h3 className='text-3xl font-bold tracking-normal'>Getir'i indirin!</h3>
        <p className='text-l font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br/> getirelim.</p>
        <nav className='mt-5 flex flex-wrap md:flex-nowrap justify-center gap-3'>
          <a href='#'>
            <img className='transition-all transform hover:scale-110 md:h-16 lg:h-auto' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
          </a>
          <a href='#'>
            <img className='transition-all transform hover:scale-110 md:h-16 lg:h-auto' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
          </a>
          <a href='#'>
            <img className='transition-all transform hover:scale-110 md:h-16 lg:h-auto' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
          </a>
        </nav> 
      </div>
      <picture className='pt-6 hidden md:block md:self-end'>
        <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'/>
        </picture>     
    </div>
  )
}