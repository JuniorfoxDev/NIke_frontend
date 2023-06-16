import React, { useState } from 'react'
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailCarousal from '@/components/ProductDetailCarousal';
import RelatedProducts from '@/components/RelatedProducts';
// import { useDispatch } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from '@/utils/api';
import { getDiscountedPrice } from '@/utils/helper';
import { addToCart } from "@/store/cartSlice";
const ProductDetails = ({product,products}) => {
    const [selectedSize,setSelectedSize] = useState();
    const [showError,setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0].attributes;
    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
  return (
    <div className='w-full md:py-20'>
        <Wrapper> 
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailCarousal images={p.image.data}/>
            </div>
            <div className='flex-[1] py-3'>
                    <div className='text-[34px] mb-2 leading-tight font-semibold'>
                            {p.name}
                    </div>
                    <div className='text-lg mb-5 font-semibold'>
                            {p.subTitle}
                    </div>
                    <div className='flex items-center'>
                            <p className='mr-2 text-lg font-semibold'>MRP : &#8377; {p.price}</p>
                            <p className='ml-auto text-base text-green-500'>
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
          </p>  
                    </div>
                    <div className='text-md font-semibold text-black/[0.5]'>incl. all taxes.</div>
                    <div className='text-md font-semibold text-black/[0.5] mb-10'>Also Including all duties</div>
                    <div className='mb-10'>
                        <div className='flex items-center justify-between mb-2'>
                                    <div className='text-md font-semibold'>Select Size</div>
                                    <div className='text-md font-medium text-black/[0.5] cursor-pointer'>Select Guide</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3'>
                    {p.size.data.map((item,i) => (
                        <div 
                        key={i}
                        className={`border rounded-md text-center py-3 font-medium ${item.enabled ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"} ${selectedSize === item.size ? "border-black" : " "} `}
                        onClick={() => {
                            setSelectedSize(item.size);
                            setShowError(false);
                        }}
                        >{item.size}</div>
                    ))}
                    {showError && (
                        <div className='text-red-600 mt-1'>Size Selection Required</div>
                    )}
                    </div>
                    <button className='w-full py-3 rounded-full text-white mt-4 bg-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'
                            onClick={() => {
                                if (!selectedSize) {
                                    setShowError(true);
                                    document
                                        .getElementById("sizesGrid")
                                        .scrollIntoView({
                                            block: "center",
                                            behavior: "smooth",
                                        });
                                } else {
                                    dispatch(
                                        addToCart({
                                            ...product?.data?.[0],
                                            selectedSize,
                                            oneQuantityPrice: p.price,
                                        })
                                    );
                                    notify();
                                }
                            }}
                    >Add To Cart</button>
                    <button className='w-full py-3 rounded-full text-white  bg-black text-lg font-medium transition-transform active:scale-95 mb-10 flex items-center justify-center gap-2 hover:opacity-75'>Wishlist <IoMdHeartEmpty size={20}/></button>
                    <div>
                        <div className="text-lg font-bold mb-5">Product Details</div>
                        <div className="text-md mb-5">
                            {/* Feel unbeatable from the tee box to the final putt in a design that's pure early MJ: speedm class and laden with true early 90's touches like visible Air and a translucnet rubber sole that continue to stand the test of time. Tgis model fuses the strut of 1st MJ's championship with some of out best golf technology helping you make a statement of confidence when it comes time to tame th course.  */}
                            {p.description}
                        </div>
                    </div>
            </div>             
        </div>
        <RelatedProducts products={products}/>
        </Wrapper>
    </div>
  )
}

export default ProductDetails
export async function getStaticPaths() {
    const products = await fetchData("/api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params: { slug } }) {
    const product = await fetchData(
        `/api/products?populate=*&filters[slug][$eq]=${slug}` 
    );
    const products = await fetchData(
        `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
