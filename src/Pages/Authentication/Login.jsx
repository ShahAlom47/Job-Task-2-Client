import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageHeading from "../../Components/PageHeading";
import img from '../../assets/image/register-bg.jpg';
import 'react-datepicker/dist/react-datepicker.css';
import useUser from '../../CustomHocks/useUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import SocialLogin from '../../SharedComponent/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { login } = useUser()
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPass,setShowPass]=useState(false)
    const navigate =useNavigate()
    const location = useLocation();
  
    const onSubmit = async (data) => {
        setError('');
        setEmailError('')
        setPasswordError('');
   
        login(data.email, data.password)
        .then(()=>{
               
            toast.success("Login success");
            reset();
            setTimeout(() => {
                navigate(location.state?.from|| location.state || '/', { replace: true });
            }, 1000);
        })
        .catch((error) => {
          
          
            if(error.message=='Firebase: Error (auth/invalid-credential).'){
                setError('Email or password do not match. Please check again')
            toast.error('Email or password do not match. Please check again')
            }   

        });
    }
      
 
    return (
        <div>
             <Helmet>
                <title> Login - Z-Zone</title>
            </Helmet>
            <ToastContainer />
            <PageHeading img={img} title={'Login '} />
            <div className="max-w   py-10 ">
                <div className="border-2 lg:p-8 md:p-6 p-3 lg:w-8/12 md:w-10/12 w-11/12   mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "Invalid email address"
                                    }
                                })}
                                placeholder='Your Email'
                                className="input input-bordered rounded w-full mt-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <div className="input input-bordered rounded w-full mt-1 relative">
                            <input
                                type={`${showPass?'text':'password'}`}
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                placeholder='Your Password'
                                className="my-auto w-full mt-2"
                            />
                            <span className='absolute top-1/4 right-5' onClick={()=>setShowPass(!showPass)}>{showPass?<IoIosEyeOff />:<IoIosEye />}</span>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        <button style={{ width: '100%' }} type="submit" className="btn-p w-full mt-4">Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                    <p className=' text-center my-7 font-semibold '>Don`t have an account?<Link to={'/register'}><button className='btn btn-link '> Register Now</button></Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
