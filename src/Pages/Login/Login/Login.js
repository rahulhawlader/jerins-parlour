
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../images/jerins-parlour-main/Image_Icon/Group 33092.png';
import useToken from '../../../Hooks/useToken';


const Login = () => {
 const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
 const { register, formState: { errors }, handleSubmit } = useForm();


 const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
 ] = useSignInWithEmailAndPassword(auth);

 const [token]=useToken(user|| gUser)

 const navigate = useNavigate();
 const location = useLocation();

 let from = location.state?.from?.pathname || "/";

 let signInError;

 if (loading || gLoading) {
  return <Loading />
 }

 if (error || gError) {
  signInError = <p className='text-red-500'> {error?.message || gError?.message}</p>
 }


 if (token) {
  navigate(from, { replace: true });


 }

 const onSubmit = (data) => {


  console.log(data)
  signInWithEmailAndPassword(data.email, data.password)

 };





 return (
  <div className='flex h-screen justify-center items-center'>
   <div className="card w-96  shadow-xl">
    <div className="card-body border-x border-sky-500">
     {/* <h2 className="text-center text-2xl font-bold">Login </h2> */}
     <div className='flex justify-center'>
      <img style={{ width: "160px", height: "60px" }} src={img} alt='' ></img>
     </div>

     <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text text-black">User Eamil</span>

       </label>
       <input type="email"
        placeholder="Your Email"
        className="input input-bordered bg-white text-black  w-full max-w-xs"
        {...register("email", {

         required: {
          value: true,
          message: 'Email is a Required'
         },

         pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'Provide a valid Email '
         }
        })}

       />
       <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

       </label>
      </div>

      <div className="form-control w-full max-w-xs">
       <label className="label">
        <span className="label-text text-black">User Password</span>

       </label>
       <input type="password"
        placeholder="Your Password"
        className="input input-bordered bg-white w-full max-w-xs"
        {...register("password", {

         required: {
          value: true,
          message: "password is required"
         },
         minLength: {
          value: 6,
          message: 'must be 6 cheracter longer'
         }
        })}

       />
       <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

       </label>
      </div>
      {signInError}
      <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
     </form>
     <p><small>New To jerin's Parlour? <Link className='text-primary' to="/signup">New Create Account</Link></small></p>






     <div className="divider">OR</div>

     <button
      onClick={() => signInWithGoogle()}
      className="btn btn-outline"
     >Continue With Google

     </button>

    </div>
   </div>
  </div>
 );
};

export default Login;