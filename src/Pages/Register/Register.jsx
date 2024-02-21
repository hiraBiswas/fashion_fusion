import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth,updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  
  const location = useLocation()
  const navigate=useNavigate()
  const auth = getAuth();
  const {createUser}= useContext(AuthContext)


  const handleRegister=e=>{

    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name')
    const photo = form.get ('photo')
    const email = form.get('email')
    const password = form.get('password')
    
    console.log(name, email, password, photo)

    if (password.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password should contain at least one capital letter');
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error('Password should contain at least one special character');
      return;
    }
    // creating new user
    createUser(name, photo, email, password)
    .then(result=> {
      console.log(result.user)
      updateProfile(auth.currentUser,{
        displayName: name,
  photoURL: photo
      })
      .then(result=>{
        toast.success('Registration Successful')
        navigate(location?.state?location.state: '/')
       
      })
      .catch(error=>{
        toast.error(error.message)
      })
    
    })
    .catch(error=>{
     console.error( "Registration error:", error.message)
    })
    
  }
  
  return (
    <div className="bg-img">
      <div className="w-full text-center">

        <div className="text-center lg:text-left ">
         

        </div>
        <div className="flex justify-center items-center w-full">
          <div className="card flex-shrink-0 shadow-2xl container1">
            <form onSubmit={handleRegister} className="card-body  ">
            <h1 className="text-2xl font-bold text-center lg:text-3xl py-2">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-medium">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              
              <div className="form-control">
              <label className="label">
                  <span className="label-text text-xl font-medium">Photo URL</span>
                </label>
                <input type="text" placeholder="photo URL" name="photo" className="input input-bordered " required  />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-medium">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-xl font-medium">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-grad text-white">Register</button>
              </div>
            </form>
            <div>
              <p className="p-8 pt-0 text-xl font-medium">Already have an account? <NavLink to="/login" className="text-2xl font-semibold text-cyan-700">Login</NavLink> here.</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;