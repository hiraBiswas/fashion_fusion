import { Link, useLoaderData } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Rating from "../../Components/Rating/Rating";


const Details = () => {
    const { user, signIn, loading } = useContext(AuthContext);
    const productDetails = useLoaderData();
    console.log(productDetails)
    const {name, rating, price, brandName, description, image, type, _id}=productDetails
    
    
    const addToCart = () => {
        if (user) {
            
            const cartItem = {
                userId: user.email, 
                productDetails: productDetails, 
            };
    
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
              })
            .then(response => {
                if (response.ok) {
                   
                    return response.json();
                    
                } else {
                    throw new Error('Failed to add product to cart');
                }
            })
            .then(data => {
                toast.success('Product added to cart')
             
            })
            .catch(error => {
                toast.error('Failed to add product to cart')
              
            });
        } 
    }


    return (
        <div className="container mx-auto">
           <div className="p-5 lg:p-12 flex flex-col flex-1 gap-40 lg:flex-row lg:items-center ">
            <div>
                <img className="mt-20" src={image} alt="" />
            </div>
            <div className="text-start flex-1 ">
                <h1 className="text-xl py-4 font-semibold lg:text-2xl " ><span >Product Name : </span> {name}</h1>
                <h3 className="text-lg">Type : {type}</h3>
                <h3 className="py-2 text-lg">Brand : {brandName}</h3>
                <h3 className="text-lg">Price : {price}</h3>
                <div className="text-start lg:text-lg py-2 font-medium">
            Rating:
            <Rating rating={rating}></Rating> 
          
            <span className="ml-2"></span>
          </div>
          <h3 className="text-xl text-start ">
           <span className="text-lg "> Description:</span> {description}
           </h3>
               <div className="flex justify-center items-center gap-5">
               <Link ><button className="btn btn-grad" onClick={addToCart} >Add to cart</button></Link>
               <Link to={`/update/${_id}`} ><button className="btn btn-grad" >Update</button></Link>
               </div>
            </div>
           </div>
         
            
           <ToastContainer />
           </div>
       
    );
};

   

export default Details;