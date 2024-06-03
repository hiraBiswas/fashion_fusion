import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import axios from 'axios';

const ProductCard = ({ product }) => {
    const { _id, name, price, rating, image, category, offer } = product;
    const [offerTitle, setOfferTitle] = useState('');

    useEffect(() => {
        const fetchOfferTitle = async () => {
            if (offer && offer !== '') {
                try {
                    const response = await axios.get('http://localhost:5000/offers');
                    const offers = response.data;
                    const matchedOffer = offers.find((offerItem) => offerItem.code === offer);
                    if (matchedOffer) {
                        setOfferTitle(matchedOffer.title);
                    } else {
                        console.log('No matching offer found for the product');
                    }
                } catch (error) {
                    console.error('Error fetching offers:', error);
                }
            }
        };
        fetchOfferTitle();
    }, [offer]);

    return (
        <div className="relative">
            <div className="card card-compact">
                <figure className="relative">
                    <img className="h-80 w-full p-2 rounded-xl" src={image} alt={name} />
                    {offerTitle && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {offerTitle}
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
