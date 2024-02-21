import React, { useEffect, useState } from 'react';
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
      <div className="py-2 lg:py-10 px-10 shadow-drop rounded-xl my-2 lg:my-5">
        {displayedProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      {!showAll && (
        <button className="btn btn-primary" onClick={() => setShowAll(true)}>
          Show All
        </button>
      )}
    </div>
  );
};

export default LastestProduct;
