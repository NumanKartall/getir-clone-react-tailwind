import React from 'react'
import { useState, useEffect } from 'react'
import cardsData from 'api/cards';
export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //data-isteği
    setCards(cardsData)
  }, [])

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0'>
      {cards.length && cards.map(card => (
        <div className='bg-white p-14 rounded-lg shadow-lg transition-all transform hover:scale-95 hover:bg-brand-color text-primary-brand-color hover:text-brand-yellow flex flex-col items-center text-center'>
          <img className='h-[150px] w-[150px] mb-6' src={card.image} />
          <h6 className='text-lg font-semibold'>{card.title}</h6>
          <p className='text-gray-400 text-m font-normal mt-2'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
