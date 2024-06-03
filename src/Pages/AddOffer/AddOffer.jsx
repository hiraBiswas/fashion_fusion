import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOffer = () => {
    const [code, setCode] = useState('');

    const handleAddOffer = async () => {
        try {
            const response = await axios.post('http://localhost:5000/offers', { code });
            if (response.data.upsertedCount === 1 || response.data.matchedCount === 1) {
                toast.success('Offer added/updated successfully!');
            } else {
                toast.error('Failed to add/update offer.');
            }
        } catch (error) {
            console.error('Error adding offer:', error);
            toast.error('Invalid offer code.');
        }
    };

    return (
        <div className='w-[600px] drop-shadow-xl mt-12 mx-auto'>
            <h2 className='font-semibold text-3xl text-center pb-8'>Add Offer</h2>
            <div className='flex gap-3 justify-center items-center'>
                <h2 className='text-xl font-medium'>Enter offer code:</h2>
                <input
                    type="text"
                    placeholder="Enter code.."
                    className="input input-bordered w-full max-w-xs"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn bg-cyan-600 text-center text-white px-10 my-8' onClick={handleAddOffer}>
                    Add
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddOffer;
