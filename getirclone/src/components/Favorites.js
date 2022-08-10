import { useState, useEffect } from 'react';
import React from 'react'
import Title from 'components/ui/Title';
import favoritesData from 'api/product.json'
import Product from 'api/product.json';
import ProductItem from 'components/ui/ProductItem';

export default function Favorites() {

  const [product, setProduct, setFavorites] = useState([]);

  useEffect(() => {
    setProduct(Product);
    setTimeout(()=> setFavorites(favoritesData), 2000);
  }, [])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className='grid grid-cols-3 2xl:grid-cols-10 xl:grid-cols-9 lg:grid-cols-6 md:grid-cols-4 gap-0.1 bg-white rounded-lg overflow-hidden text-brand-color text-lg font-semibold' >
        {!product.length &&'Yükleniyor...'}
        {product.length && product.map(product => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}
