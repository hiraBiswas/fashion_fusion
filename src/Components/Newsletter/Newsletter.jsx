import React from 'react';

const Newsletter = () => {
    return (
        <div className="container mx-auto mt-24 w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
        <img src='https://i.ibb.co/zPgDkjV/cozy-portrait-young-woman-knitted-blue-sweater-bright-pink-makeup-holds-shopping-bags-shows-her-fing.jpg' className="w-full rounded-xl h-[700px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-cyan-950 to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white max-w-5xl space-y-7 pl-12 w-1/2'>
                        <h2 className='text-5xl text-amber-500 font-bold'>Get Upto 50% Discount</h2>
                        <p> From trendy tops to chic bottoms, our collection offers something for everyone. Don't miss out on the chance to upgrade your closet with premium quality apparel at unbeatable prices. Shop now and step out in style without breaking the bank!Enter Email and get the code of discount,</p>
                        <div>
                        <input type="text" placeholder="Enter email" className="input input-bordered input-accent w-full max-w-xl" />
                            <button className="btn btn-outline btn-grad ">Submit</button>
                        </div>
                    </div>
                </div>
        </div> 
       
      </div>
    );
};

export default Newsletter;