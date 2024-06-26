// ApplyOffer.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyOffer = () => {
    const [products, setProducts] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedDiscount, setSelectedDiscount] = useState('');
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [loadingDiscounts, setLoadingDiscounts] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
                setLoadingProducts(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Error fetching products');
                setLoadingProducts(false);
            }
        };

        const fetchDiscounts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/offers');
                setDiscounts(response.data);
                setLoadingDiscounts(false);
            } catch (error) {
                console.error('Error fetching discounts:', error);
                setError('Error fetching discounts');
                setLoadingDiscounts(false);
            }
        };

        fetchProducts();
        fetchDiscounts();
    }, []);

    const handleUpdateDiscount = async () => {
        if (!selectedProduct || !selectedDiscount) {
            toast.error('Please select both a product and a discount offer.');
            return;
        }
    
        try {
            // Check if the selected product already has an offer
            const product = products.find((product) => product._id === selectedProduct);
            if (product) {
                // Prepare the updated product object with the new offer
                const updatedProduct = { ...product, offer: selectedDiscount };
    
                // Send PATCH request to update the product with the new offer
                console.log(`Updating product ${selectedProduct} with discount ${selectedDiscount}`);
                const response = await axios.patch(`http://localhost:5000/products/${selectedProduct}`, updatedProduct);
                
                // Check the response status to determine if the update was successful
                if (response.status === 200) {
                    toast.success('Discount applied successfully!');
                } else {
                    toast.error('Failed to apply discount.');
                }
            } else {
                // If the product is not found, show an error toast
                toast.error('Selected product not found.');
            }
        } catch (error) {
            console.error('Error updating discount:', error);
            toast.error('Failed to apply discount.');
        }
    };
    
    return (
        <div className='container mx-auto w-[600px] shadow-2xl mt-12'>
            {error && <p className="text-red-500">{error}</p>}
            <div className='flex gap-4 pl-20 pr-20 pt-8 items-center'>
                <h2 className='text-md font-medium'>Product :</h2>
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    disabled={loadingProducts}
                >
                    <option value="" disabled>{loadingProducts ? 'Loading products...' : 'Select a product'}</option>
                    {products.map((product) => (
                        <option key={product._id} value={product._id}>
                            {product.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex gap-4 pl-20 pr-20 pt-8 items-center'>
                <h2 className='text-md font-medium'>Offer Code :</h2>
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                    disabled={loadingDiscounts}
                >
                    <option value="" disabled>{loadingDiscounts ? 'Loading discounts...' : 'Select a discount offer'}</option>
                    {discounts.map((discount) => (
                        <option key={discount._id} value={discount.code}>
                            {discount.code}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex justify-center p-8'>
                <button className='btn bg-cyan-700 text-white px-8' onClick={handleUpdateDiscount} disabled={loadingProducts || loadingDiscounts}>Apply</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ApplyOffer;
