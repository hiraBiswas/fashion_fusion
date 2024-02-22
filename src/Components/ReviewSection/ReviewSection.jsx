const ReviewSection = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center  text-black text-2xl mt-16 font-bold lg:text-4xl my-8 lg:my-12 ">Your Feedback, Our Inspiration</h1>
            <div className="hero h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/FhPC7qH/lifestyle-concept-portrait-shocked-young-attractive-woman-yellow-summer-dressposing-with-shopping-ba.jpg) '}}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="flex flex-col ">
  <div className="ml-10  text-start text-white">
    <div className="container text-center max-w-xl mx-auto">
      <h1 className="mb-5 text-2xl my-5 font-bold lg:text-4xl"><span className="text-cyan-600">FashionFusion -</span><br />Where Style Meets Elegance:</h1>
      <p className="mb-5">Embark on a gastronomic journey with our "Culinary Chronicles" review section, where every dish tells a unique tale of flavor. Join us in celebrating the symphony of tastes that grace our tables, as we delve into the world of epicurean delights that leave a lasting impression on both the palate and the soul.</p>
     <div className="flex justify-center">
     <button className="btn btn-grad text-white">Explore More</button>
     </div>
    </div>
  </div>

  <div className="grid gap-8 mt-8 grid-cols-2 mx-20 md:grid-cols-2  lg:grid-cols-4">
    <div className=" border-cyan-400 border-[1px] drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-24 w-24 rounded-full py-3" src="https://i.ibb.co/6y1GzrM/images-4.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center">Fashion Fusion exceeded my expectations with their trendy designs and impeccable customer service!</p>
        <p className="text-end text-cyan-400 ">-Robert</p>

    </div>

    <div className=" border-cyan-400 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-24 w-24 rounded-full py-3" src="https://i.ibb.co/61y7jC6/collarbone-cut-with-soft-waves-1.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center">Absolutely love the variety and quality of clothing at Fashion Fusion - my wardrobe has never looked better!</p>
        <p className="text-end text-cyan-400 ">-Janhabi</p>

    </div>

    <div className=" border-cyan-400 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-24 w-24 rounded-full py-3" src="https://i.ibb.co/Br11Vkz/download-4.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center"> Fashion Fusion is my top choice for fashionable attire; their attention to detail and on-trend pieces always impress.</p>
        <p className="text-end text-cyan-400 ">-Robert</p>

    </div>

    <div className=" border-cyan-400 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-24 w-24 rounded-full py-3" src="https://i.ibb.co/WzvZcbC/images-3.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center">Exceptional experience shopping at Fashion Fusion - their stylish collection and swift delivery make them my favorite clothing store!</p>
        <p className="text-end text-cyan-400 ">-Nobita</p>

    </div>
  </div>
  
</div>
  </div> 
</div>


       
    );
};

export default ReviewSection;