import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = { name, image, price, brandName, type, description, rating };

    fetch('http://localhost:5000/clothes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Product added successfully', {
            position: 'top-center',
            autoClose: 2000, 
          });

          form.reset();
        }
        
      });
     
  };

  return (
    <div className="container mx-auto rounded-2xl drop-shadow">
      <form onSubmit={handleAddProduct} className="w-full px-10 pt-20">
      <h1 className="mx-auto p-10 text-cyan-400 font-semibold text-center text-2xl lg:text-4xl">Add New Product</h1>
                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Image</span>
                            </label>
                            <input type="text" placeholder="image url " name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />

                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" name="brandName" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Type</span>
                            </label>
                            <input type="text" placeholder="type" name="type" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Price</span>
                            </label>
                            <input type="text" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" name="rating" className="input input-bordered" required />
                        </div>
                    </div>

                 <div className="flex gap-6">
                 <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-xl">Short Description</span>
                        </label>
                        <input type="text" placeholder="short description" name="description" className="input input-bordered h-20" required />
                    </div>
                    
                 </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-grad drop-shadow">Add Product</button>
                    </div>
                </form>
             
      <ToastContainer />
    </div>
  );
};

export default AddProduct;