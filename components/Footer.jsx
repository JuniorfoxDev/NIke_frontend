import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-14 pb-3'>
        <Wrapper className=" flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
          {/* {Left Starting} */}
            <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
              {/* {Menu Start} */}
              <div className="flex flex-col gap-3 shrink-0">
                <div className=" font-medium uppercase text-sm cursor-pointer">
                  Find a store
                </div>
                <div className="font-medium uppercase text-sm cursor-pointer">
                  become a partner
                </div>
                <div className="font-medium uppercase text-sm cursor-pointer">
                  sign up for email
                </div>
                <div className="font-medium uppercase text-sm cursor-pointer">send us a feedback</div>
                <div className="font-medium uppercase text-sm cursor-pointer">student discount</div>
              </div>
            <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
              <div className="flex flex-col gap-3">
                <div className="font-medium uppercase text-sm">get help</div>
                <div className="font-medium uppercase text-sm">Order Status</div>
                <div className="font-medium uppercase text-sm">Delivery</div>
                <div className="font-medium uppercase text-sm">Returns</div>
                <div className="font-medium uppercase text-sm">Payment Options</div>
                <div className="font-medium uppercase text-sm">Contact us </div>
              </div>
            <div className="flex flex-col gap-3">
                <div className="font-medium upperca se text-sm">About nike </div>
                <div className="font-medium upperca se text-sm">News </div>
                <div className="font-medium upperca se text-sm">Careers </div>
                <div className="font-medium upperca se text-sm">Investors </div>
                <div className="font-medium upperca se text-sm">Sustainability </div>
            </div>
            </div> 
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <div 
              onClick={() => {
                window.open("https://facebook.com", "_blank");
              }} 
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" 
              >
                <FaFacebookF size={20}/>
              </div>
              <Link
              href="https://twitter.com"
               className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" 
               >
                <FaTwitter size={20}/>
              </Link>
              <div 
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" 
              >
                <FaYoutube size={20}/>
              </div>
              <div 
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer" 
              >
                <FaInstagram size={20}/>
              </div>
            </div>
        </Wrapper>
        <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                © 2023 Nike, Inc. All Rights Reserved
                </div>
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                  <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">Guides</div>
                  <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">Terms of Sale</div>
                  <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">Terms of use </div>
                  <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">Privacy Policy </div>
                </div>
        </Wrapper>
    </footer>
  )
}

export default Footer