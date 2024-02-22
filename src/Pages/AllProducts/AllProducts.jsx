import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
 

 useEffect(() => {
    fetch('http://localhost:5000/clothes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return (
    
             <div className='container mx-auto py-2'>
      <div className=" grid grid-cols-4 shadow-drop gap-10 mt-24 rounded-xl">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
            
        </div>
    );
};

export default AllProducts;