import {  useContext, useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLog from "../Shared/Social/SocialLog";

const Login = () => {
    const navigate= useNavigate();
    const location= useLocation();
    const from = location.state?.from?.pathname || "/"

    const {login}= useContext(AuthContext);

    
    const handleLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        
        login(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            Swal.fire({
              title: "Log In!",
              text: "SuccessFull!",
              icon: "success"
            });
            navigate(from, {replace:true})
            


        })
    }
  

   
    useEffect(() => {
      document.title= "Task zone | Login";
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200">
            
  <div className="hero-content flex-col lg:flex">
    <div className="text-center">
      <h1 className="text-5xl  font-bold">Login now!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />

        </div>
      
        <div className="form-control mt-6">
          <input  type="submit" className="btn primaryBtn" value="Login" />
        </div>
      </form>
      <div className="divider mt-1">OR</div>

      <div className="form-control ">
        {/* <SocialLog/> */}
        <SocialLog/>
        <label className="flex items-center justify-center gap-2 my-4">
            <a href="#" className="label-text-alt link link-hover font text-base ">Forgot password?</a>
            <p className="font">New here? <Link to={'/register'}>SingUp</Link></p>
          </label>
        </div>
    </div>
  </div>
</div>
    );
};

export default Login;