import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const handleAddProduct = async (event) => {
    event.preventDefault();

    const form = event.target; 

    try {
        const imageFile = form.image.files[0];
  
        // Check if an image is selected
        if (!imageFile) {
          toast.error('Please select an image.');
          return;
        }
  
        const formData = new FormData();
        formData.append('image', imageFile);
  
        // Upload image to imgbb
        const imageUploadResponse = await fetch(image_hosting_api, {
          method: 'POST',
          body: formData,
        });
  
        if (!imageUploadResponse.ok) {
          throw new Error(`HTTP error! Status: ${imageUploadResponse.status}`);
        }
  
        const result = await imageUploadResponse.json();
  
        if (!result.success) {
          toast.error('Error during image upload');
          return;
        }
  
        const imageUrl = result.data.display_url;
  
        console.log(imageUrl);
  
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const newProduct = { name,  image: imageUrl, price, brandName, type, description, rating };
        console.log(newProduct);
  
        fetch('https://fashion-fusion-server.vercel.app/clothes', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
                form.reset();
              toast.success('Product added successfully')
  
          
            }

            else {
            toast.error('Product could not be added');
          }
          });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add product.');
    }
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
                          <input type="file" placeholder="image url " name="image" className="input input-bordered" required />
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
           
    <ToastContainer  style={{ marginTop: '80px' }} />
  </div>
  );
};

export default AddProduct;
