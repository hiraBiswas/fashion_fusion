import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                setCartData(userCartItems);
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

    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-center py-5 text-white lg:text-2xl'>My Order</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {cartData.map((item, index) => (
                         
                            <tr key={item._id}>
                                 <td>{index + 1}</td>
                                <td><img className='h-16 w-16 lg:h-24 lg:w-24' src={item.image} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.brandName}</td>
                                <td>{item.type}</td>
                                <td><button onClick={() => handleDeleteItem(item._id)} className='btn bg-red-500 text-xl text-white'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyCart;
