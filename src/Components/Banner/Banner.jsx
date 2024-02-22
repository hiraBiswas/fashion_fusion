import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <img src='https://i.ibb.co/6r8py7R/young-pretty-woman-holding-shopping-bags-smiling-excited-camera-buying-with-discounts-standing-ov.jpg' className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-cyan-950 to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Where Tradition Meets Trendsetting</h2>
                        <p>Our curated collections seamlessly merge classic elements with contemporary flair, offering a fashion experience that celebrates both heritage and innovation. Embrace the fusion of old-world charm and modern sophistication as you explore our latest designs.</p>
                        <div>

                            <button className="btn btn-outline btn-grad ">Latest Project</button>
                        </div>
                    </div>
                </div>
        </div> 
       
      </div>
    );
};

export default Banner;