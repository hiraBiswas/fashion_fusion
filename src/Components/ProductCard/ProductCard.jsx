import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const ProductCard = ({ product }) => {
    const { _id, name,  price, rating, image, category,offer } = product;
    console.log(product.image);
    return (
        <div className="relative">
            <div className="card card-compact">
                <figure className="relative">
                    <img className="h-80 w-full p-2 rounded-xl" src={image} alt={name} />
                    {offer && offer !== '' && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {offer}
                        </span>
                    )}
                </figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-xl">{name}</h2>
                    <h4 className="text-start lg:text-base font-medium">Type: {category}</h4>
                    <h4 className="text-start lg:text-base font-medium">Price: {price} Taka</h4>
                    <div className="text-start lg:text-base font-medium">
                        Rating:
                        <Rating rating={rating} />
                        <span className="ml-2"></span>
                    </div>
                    <div className="">
                        <Link to={`/details/${_id}`}>
                            <button className="btn-card btn w-[300px]">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
