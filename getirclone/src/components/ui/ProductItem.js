import {AiOutlinePlus} from 'react-icons/ai';
export default function Product({ product } ) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold m-5 transition-all transform  hover:scale-110">
      <button className='absolute top-1 right-1 bg-white w-6 h-6 flex items-center justify-center border border-gray-100 rounded-lg hover:bg-brand-color hover:text-brand-yellow'>
        <AiOutlinePlus size={16}/>
      </button>
      <a href='#' ><img src={product.image} alt={product.title} /></a>
      <div className="text-brand-color font-bold ">{product.price}</div>
      <div className="text-yellow-600">{product.title}</div>
      <div className="text-gray-700">{product.alt}</div>
    </div>
  )
}
