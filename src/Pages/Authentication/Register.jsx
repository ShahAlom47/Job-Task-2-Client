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
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase.config';
import useAxiosPublic from '../../CustomHocks/useAxiosPublic';
import SocialLogin from '../../SharedComponent/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';



const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const AxiosPublic = useAxiosPublic()
    const location=useLocation()

    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
    const { addUser } = useUser()



    const onSubmit = async data => {

        addUser(data.email, data.password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: data.name,
                })
                    .then(() => {
                        const userInfo = { email: data.email, name: data.name, photoURL: auth.currentUser.photoURL, role: 'user' }
                        AxiosPublic.post("/user/addUser", userInfo)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    toast.success('Account Created Successfully ')
                                    reset()
                                    setTimeout(() => {
                                        navigate(location.state?.from|| location.state || '/', { replace: true });
                                    }, 2000);
                                    return
                                }

                            })

                    })
                    .catch((error) => {
                        // setErrMsg(error.message)
                        toast.error(error.message)
                    });
            })
            .catch((error) => {
                // setErrMsg(error.message)
                toast.error(error.message)
            });


    };

    return (
        <div>
             <Helmet>
                <title> Register - Z-Zone</title>
            </Helmet>
            <PageHeading img={img} title={'Register '} />
            <ToastContainer />
            <div className="max-w my-5">
                <h1 className="text-3xl font-bold text-center mt-16 mb-6">Red Love Organization</h1>
                <div className="border-2 lg:p-8 md:p-6 p-3 lg:w-8/12 md:w-10/12 w-full m-auto mb-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Full Name is required" })}
                                className="input input-bordered rounded-sm w-full mt-1"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                        </div>

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
                                className="input input-bordered rounded w-full mt-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Password</label>
                            <div className='relative input input-bordered rounded w-full mt-1'>
                                <input
                                    type={`${showPass ? 'text':'password'}`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters long"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: "Password must contain at least one letter and one number"
                                        }
                                    })}
                                    className=" mt-1 h-full"
                                />
                                <button className='absolute top-1/4 right-5' onClick={() => setShowPass(!showPass)}>{showPass ? <IoIosEyeOff /> : <IoIosEye />}</button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>



                        <button style={{ width: '100%' }} type="submit" className="btn-p w-full mt-4">Register</button>
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                    <p className=' text-center my-7 font-semibold '>Already have an account?<Link to={'/login'}><button className='btn btn-link '> Login Now</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
