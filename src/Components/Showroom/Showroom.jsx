// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//   duration: 2500,
// });

const Showroom = () => {
  return (
    <div  className="container  mx-auto rounded-xl mt-10 lg:mt-20">
      <h2 className='text-2xl text-center font-bold py-5 lg:text-4xl lg:py-10'>Our Showroom</h2>
      <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2">


        <div className=" card card-side flex flex-col bg-base-100 shadow-xl lg:flex-row ">
         <img  src="https://i.ibb.co/4dRpXxL/2019-01-24.jpg" className='h-full w-full lg:w-60 rounded-xl' alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The Rana Plaza</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> Bahubal, Habiganj, Sylhet Division, Bangladesh</p>
          </div>
        </div>



        <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row">
         <img className='h-full w-full lg:w-60 rounded-xl' src="https://i.ibb.co/LnT0HBW/istockphoto-1023612090-612x612.jpg"  alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">Jess Tower</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> S. S. Khaled Road, Lalkhan Bazar, Chattogram 4000, Bangladesh</p>
          </div>
        </div>



        <div className="card card-side flex-col bg-base-100 shadow-xl lg:flex-row">
          <img className='h-full w-full lg:w-60 rounded-xl' src="https://i.ibb.co/mNsnZpZ/dsc-00541.jpg" alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The Palace Convention Center</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span>Polashbari, Airport Road, Dhaka 1229, Bangladesh</p>
          </div>
        </div>


        <div className="card lg:card-side  flex-col bg-base-100 shadow-xl lg:flex-row">
          <img className='h-full w-full lg:w-60  rounded-xl ' src="https://i.ibb.co/cFKLDTq/c.gif"  alt="Movie" />
          <div className="card-body">
            <h2 className="card-title lg:text-2xl ">The City Plaza</h2>
            <p><span className="text-lg font-medium pt-0">Address:</span> Sreemangal - Habiganj Road, Sreemangal 3210, Bangladesh</p>
          </div>
        </div>


      </div>
    </div>

  );
};

export default Showroom;