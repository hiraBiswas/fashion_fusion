import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const location = useLocation()
  console.log('location in login page', location)
  const navigate=useNavigate() 
 const {signIn, signInWithGoogle}=useContext(AuthContext)


  const handleLogin=e=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)


    signIn(email, password)
    .then(result=>{
      
     navigate(location?.state?location.state: '/')
    })
    .catch(error=>{
      toast.error(error.message);
    })
  }
    return (
     
        <div className="bg-img" >
              <div className="w-full bg-base-100 text-center ">
          
    <div className="text-center lg:text-left  ">
    
     
    </div>
    <div className="flex justify-center items-center w-full">
    <div className="card flex-shrink-0 shadow-2xl container1 ">
      <form onSubmit={handleLogin} className="">
      <h1 className="text-2xl font-bold text-center lg:text-3xl py-5">Login now!</h1>
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
          <button className="btn btn-grad text-white">Login</button>
        </div>
      </form>

      <div className="px-8 py-1">
      <h2>Or</h2>
      <div onClick={signInWithGoogle} className="flex items-center gap-6 justify-center">
    
      <Link className="text-cyan-700 font-bold text-xl">Login with Google</Link>
      </div>
      </div>
      <div>
        <p className="p-8 pt-0 text-xl font-medium">New to the website? <NavLink to="/register" className="text-2xl font-semibold text-cyan-700">Register</NavLink> here.</p>
      </div>
    </div>
    </div>
  </div>
  <ToastContainer />
</div> 
       
    );
};

export default Login;