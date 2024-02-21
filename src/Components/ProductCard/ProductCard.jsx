import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductCard = ({product}) => {
    const {_id,name, brandName,price, rating, image, type}= product;
    return (
        <div>
             <div>
         


         <div className="card card-compact bg-base-100 shadow-xl">
 <figure><img className="h-72 w-full p-5 rounded-2xl" src={image}/></figure>
 <div className="card-body">
   <h2 className="card-title lg:text-2xl">{name}</h2>
  <h4 className="text-start lg:text-lg font-medium"> Type : {type}</h4>
  <h4 className="text-start lg:text-lg font-medium">Brand Name : {brandName} </h4>
  <h4 className="text-start lg:text-lg font-medium">Price : {price} </h4>
  <div className="text-start lg:text-lg font-medium">
           Rating:
           <Rating rating={rating} />
           <span className="ml-2"></span>
         </div>
   <div className="card-actions justify-between">
     <Link to={`/brand/${brandName}/details/${_id}`}><button className="btn bg-amber-600">Details</button></Link>
    <Link to={`/brand/${brandName}/updateProduct/${_id}`}> <button className="btn bg-amber-600">Update</button></Link>
   </div>
   
 </div>
</div>
       </div>
        </div>
    );
};

export default ProductCard;