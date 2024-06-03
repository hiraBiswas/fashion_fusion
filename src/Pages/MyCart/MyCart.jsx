import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './mycart.css'; // Ensure you have this CSS file for custom styles

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cart data');
                }
                return response.json();
            })
            .then(data => {
                const userCartItems = data.filter(item => item.userId === user.email);
                // Initialize quantity if not present
                const initializedItems = userCartItems.map(item => ({
                    ...item,
                    quantity: item.quantity || 1,
                }));
                setCartData(initializedItems);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [user.email]);

    const handleDeleteItem = (itemId) => {
        fetch(`http://localhost:5000/cart/${itemId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    const remainingData = cartData.filter(dataItem => dataItem._id !== itemId);
                    toast.success('Deleted Successfully');
                    setCartData(remainingData);
                } else {
                    toast.error('Failed to Delete');
                }
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    const handleQuantityChange = (itemId, delta) => {
        const updatedCartData = cartData.map(item => {
            if (item._id === itemId) {
                const newQuantity = item.quantity + delta;
                if (newQuantity <= 0) {
                    handleDeleteItem(itemId);
                } else {
                    item.quantity = newQuantity;
                }
            }
            return item;
        });
        setCartData(updatedCartData);
    };

    const calculateTotal = () => {
        return cartData.reduce((total, item) => total + item.productDetails.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className='cart-container pt-32 container mx-auto w-[600px]'>
            <h1 className='text-3xl cart-title font-semibold '>Shopping Cart</h1>
            <div className='cart-items'>
                {cartData.length === 0 ? (
                    <div className='empty-cart-message'>
                        <h2 className='text-2xl font-medium mt-8 text-red-500 text-center'>No Product in Cart</h2>
                    </div>
                ) : (
                    cartData.map((item, index) => (
                        <div key={item._id} className='cart-item'>
                            <img className='item-image' src={item.productDetails.image} alt={item.productDetails.name} />
                            <div className='item-details flex gap-5'>
                                <h2 className='item-name'>{item.productDetails.name}</h2>
                                <p className='item-price'>{item.productDetails.price}</p>
                                <p className='item-brand'>{item.productDetails.brandName}</p>
                                <p className='item-type'>{item.productDetails.type}</p>
                                <div className='quantity-controls'>
                                    <button onClick={() => handleQuantityChange(item._id, -1)} className='quantity-btn'>-</button>
                                    <span className='quantity'>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item._id, 1)} className='quantity-btn'>+</button>
                                </div>
                                <div className='item-actions'>
                                    <button onClick={() => handleDeleteItem(item._id)} className='remove-btn'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cartData.length > 0 && (
                <div className='cart-summary'>
                    <h2>Sub-Total</h2>
                    <p>{calculateTotal()}</p>
                    <button className='checkout-btn'>Checkout</button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default MyCart;
