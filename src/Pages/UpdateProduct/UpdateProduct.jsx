import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { brand_name, id } = useParams();
  const { _id, name, brandName, price, rating, image, type, description } = product;

  const handleUpdateProduct =async (event) => {
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
        const updateProduct = { name,  image: imageUrl, price, brandName, type, description, rating };
        console.log(updateProduct);
  
        fetch(`http://localhost:5000/clothes/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
                toast.success('Product updated Successfully');
              }

            else {
            toast.error('Product could not be updated');
          }
          });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update product.');
    }
  };
  return (
    <div className=" w-full rounded-2xl drop-shadow">
   
      <form onSubmit={handleUpdateProduct} className="w-full px-10">
      <h1 className="mx-auto p-10 text-amber-600 font-semibold text-2xl lg:text-4xl text-center">Update Product</h1>
                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Image</span>
                            </label>
                            <input type="file" placeholder="image url "  name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" defaultValue={name} className="input input-bordered" required />

                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Brand Name</span>
                            </label>
                            <input type="text" placeholder="brand name" defaultValue={brandName} name="brandName" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Type</span>
                            </label>
                            <input type="text" defaultValue={type} placeholder="type" name="type" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className="flex flex-col gap-6 w-full lg:flex-row">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Price</span>
                            </label>
                            <input type="text" defaultValue={price} placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text lg:text-xl">Rating</span>
                            </label>
                            <input type="text" placeholder="rating" defaultValue={rating} name="rating" className="input input-bordered" required />
                        </div>
                    </div>

                 <div className="flex gap-6">
                 <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text lg:text-xl">Short Description</span>
                        </label>
                        <input type="text" placeholder="short description" defaultValue={description} name="description" className="input input-bordered" required />
                    </div>
                    
                 </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-amber-600 drop-shadow">Update</button>
                    </div>
                
      </form>

      <ToastContainer  style={{ marginTop: '80px' }} />
    </div>
  );
};

export default UpdateProduct;