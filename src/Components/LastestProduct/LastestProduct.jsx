import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const LastestProduct = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/clothes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter the products to show only the last 8 items if showAll is false
  const displayedProducts = showAll ? products : products.slice(-8);

  return (
    <div>
        <h2 className='text-4xl font-bold text-center mt-16'>Featured Products</h2>
      <div className="container mx-auto py-2  shadow-drop gap-10  grid grid-cols-4 rounded-xl my-2 lg:my-5">
        {displayedProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      {!showAll && (
        <Link to="/all-products" className="btn btn-primary">
          Show All
        </Link>
      )}
    </div>
  );
};

export default LastestProduct;
