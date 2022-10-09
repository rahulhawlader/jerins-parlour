
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser)


  const navigate = useNavigate();






  let signInError;

  if (loading || gLoading || updating) {
    return <Loading />
  }

  if (error || gError || updateError) {
    signInError = <p className='text-red-500'> {error?.message || gError?.message || updateError?.message}</p>
  }


  if (token) {
    console.log(user, gUser);
    navigate('/appoinment')


  }

  const onSubmit = async (data) => {


    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({
      displayName
        : data.name
    });
    console.log('updated done');
    // navigate('/appoinment')

  };







  return (
    <div className='flex h-screen justify-center items-center  '>
      <div className="card w-96  shadow-xl">
        <div className="card-body border-x border-sky-500">
          <h2 className="text-2xl text-black font-bold">Create an Account</h2>

          <form onSubmit={handleSubmit(onSubmit)}>


            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>

              </label>
              <input type="text"

                placeholder="your Name "
                className="input input-bordered bg-white w-full max-w-xs"
                {...register("name", {

                  required: {
                    value: true,
                    message: "name is required"
                  },

                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>





            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input type="email"
                placeholder="Your Email"
                className="input input-bordered bg-white w-full max-w-xs"
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
                <span className="label-text">Password</span>

              </label>
              <input type="password"
                placeholder="You Password"
                className="input input-bordered w-full max-w-xs"
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
            <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
          </form>
          <p><small>Already Have an account <Link className='text-primary' to="/login">Please Login</Link></small></p>






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

export default SignUp;