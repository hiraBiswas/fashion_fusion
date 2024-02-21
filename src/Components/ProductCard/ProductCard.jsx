import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductCard = ({product}) => {
    const {_id,name, brandName,price, rating, image, type}= product;
    return (
        <div>
             <div>
         


         <div className="card card-compact ">
 <figure><img className="h-80 w-full p-2 rounded-xl" src={image}/></figure>
 <div className="card-body">
   <h2 className="card-title lg:text-xl">{name}</h2>
  <h4 className="text-start lg:text-base font-medium"> Type : {type}</h4>
  <h4 className="text-start lg:text-base font-medium">Brand Name : {brandName} </h4>
  <h4 className="text-start lg:text-base font-medium">Price : {price} </h4>
  <div className="text-start lg:text-base font-medium">
           Rating:
           <Rating rating={rating} />
           <span className="ml-2"></span>
         </div>
   <div className="">
     <Link to={`/details/${_id}`}><button className="btn-card btn w-[300px] ">Details</button></Link>
    
   </div>
   
 </div>
</div>
       </div>
        </div>
    );
};

export default ProductCard;