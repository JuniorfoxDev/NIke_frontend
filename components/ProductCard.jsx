import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { getDiscountedPrice } from '@/utils/helper';

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link href={`/product/${p.slug}`}
    className='transform overflow-hidden bg-white duration-300 hover:scale-95 cursor-pointer'
    >
      <Image
      width={500}
      height={500}
      // src={p.thumbnail.data.attributes.url}
      alt={p.name}
      src={p.thumnail.data.attributes.url}
      className='rounded-lg'
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-semibold">{p.name}</h2>
        <div className='flex items-center text-black/[0.5]'>
            <p className='mr-2 text-lg font-bold'> &#8377;{p.price}</p>
            {p.orignal_price && (
                        <>
                            <p className="text-base  font-medium line-through">
                                &#8377;{p.orignal_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                            {getDiscountedPrice(
                              p.orignal_price,
                              p.price)}
                            % off
                            </p>
                        </>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
