import React from 'react';
import { FaRegHandshake, FaWhatsapp } from 'react-icons/fa';
import {HiReceiptRefund } from 'react-icons/hi';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdLocalOffer} from 'react-icons/md'
import {SiOrigin } from 'react-icons/si'
import { FaExchangeAlt } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";

const Services = () => {
    return (
        <div>
        <h1 className='text-2xl mt-10 text-center font-bold lg:text-4xl lg:mt-20 text-black'>Our Services </h1>
        <div className="bg-cyan-400 mt-5 container rounded-lg flex flex-col lg:mx-w-full lg:mx-auto   gap-6 lg:flex-row lg:justify-center items-center">
       
            <div className="p-5 text-center flex-1">
             <h4 className="text-xl lg:text-2xl">WE ARE <span className='text-black font-bold'>FashionFusion</span></h4>
             <h2 className="text-2xl font-medium py-3 lg:text-4xl lg:font-bold"><span className="text-2xl text-black font-bold lg:text-4xl">No.1</span> Clothing and Fashion Brand</h2>
             <p className='mt-3'>We offer a diverse selection of high-quality fashion pieces tailored to different styles, body types, and preferences. Our mission is to empower individuals by offering stylish, sustainable clothing options that align with their values and inspire confidence. Committed to customer satisfaction, we aim to redefine the world of fashion, one outfit at a time, through innovative designs and eco-conscious practices.</p>

             <div className='flex items-center justify-center'>
                <button className="btn mt-5 btn-grad  text-black">ABOUT US</button>
             </div>
            </div>


          
            <div className='flex-1 drop-shadow-lg grid grid-cols-1 lg:grid-cols-3 lg:py-8 lg:pr-4'>
                <div className='border-2 bg-white border-cyan-400 py-8 hover:scale-95 transition-transform hover:bg-cyan-50'>
                  <div className=' flex justify-center'>
                  <FaRegHandshake className='text-7xl text-cyan-700'></FaRegHandshake>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>Friendly Salesman</h1>
                    <p className='text-center text-cyan-700'>More than 120 salesman</p>  
                </div>

                <div className='border-2 py-8 bg-white  border-cyan-400 lg:border-x-0 hover:scale-95 transition-transform hover:bg-cyan-50 '>
                  <div className=' flex justify-center'>
                  <TbTruckDelivery className='text-7xl text-cyan-700'></TbTruckDelivery>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>Fastest Delivery</h1>
                    <p className='text-center text-cyan-700'>Outside city it will take 3/4 days</p>
                </div>


                <div className='border-2 py-8 bg-white  border-cyan-400 hover:scale-95 transition-transform hover:bg-cyan-50'>
                  <div className=' flex justify-center'>
                  <FaExchangeAlt className='text-7xl text-cyan-700'></FaExchangeAlt>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>Exchange Option</h1>
                    <p className='text-center text-cyan-700'>We have exchange policy  </p>   
                </div>


                <div className='border-2 py-8 bg-white  border-cyan-400 lg:border-t-0 hover:scale-95 transition-transform hover:bg-cyan-50'>
                  <div className=' flex justify-center'>
                  <FaWhatsapp className='text-7xl text-cyan-700'></FaWhatsapp>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>24/7 Hours Support</h1>
                    <p className='text-center text-cyan-700'>Anytime anywhere</p>
                     </div>


                     <div className='border-2 bg-white  py-8  border-cyan-400 lg:border-t-0 lg:border-x-0 hover:scale-95 transition-transform hover:bg-cyan-50'>
                  <div className=' flex justify-center'>
                  <MdLocalOffer className='text-7xl text-cyan-700'></MdLocalOffer>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>Amazing Offers</h1>
                    <p className='text-center text-cyan-700'>We are giving offer on purchase</p>
                  
                </div>


                <div className='border-2 py-8 bg-white  border-cyan-400 lg:border-t-0 hover:scale-95 transition-transform hover:bg-cyan-50'>
                  <div className=' flex justify-center'>
                  <BiSolidCustomize className='text-7xl text-cyan-700'></BiSolidCustomize>
                  </div>
                    <h1 className='text-2xl font-semibold text-center text-cyan-700'>Custom Tailoring</h1>
                    <p className='text-center text-cyan-700'>We provide custom tailoring service</p>
                  
                </div>

            </div>
            
        </div>
        </div>
    );
};
export default Services;