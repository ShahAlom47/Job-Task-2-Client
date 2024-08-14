
import { ImGoogle } from "react-icons/im";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../../CustomHocks/useUser";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";
import Swal from "sweetalert2";






const SocialLogin = () => {
    const { googleLogin} = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()





    const googleLoginHandel = async () => {
        googleLogin()
            .then((res) => {
                const userInfo = { email: res.user?.email, name: res.user?.displayName, photoURL: res?.user?.photoURL }
                axiosPublic.post("/user/addUser", userInfo)
                    .then(res => {
                     console.log(res);
                        if (res?.data?.insertedId) {
                            toast.success('Account Created Successfully ')
                          
                            setTimeout(() => {
                                navigate(location.state?.from|| location.state || '/', { replace: true });
                            }, 2000);
                            return
                        }
                        else if(res.data.message==='Account with this email already exists'){
                            toast.success('Login Success ')
                          
                            setTimeout(() => {
                                navigate(location.state?.from|| location.state || '/', { replace: true });
                            }, 1000);
                            return

                        }
                        
                    })
                    .catch((error) => {
                        toast.error(error.message)
                    });
            })
            .catch((error) => {
                toast.error(error.message)
            });
    };

    return (
        <div className="  m-auto  flex justify-center  gap-3 mb-9 ">
            <ToastContainer/>
            <button onClick={googleLoginHandel} className="btn-p text-white flex justify-center items-center" style={{borderRadius:'100%',width:'40px' }}> <ImGoogle className=" w-8 h-6" /> </button>
            <button onClick={()=>Swal.fire('This button is just for visual aesthetics.')}  className="btn-p text-white flex justify-center items-center" style={{borderRadius:'100%',width:'40px' }}> <IoLogoGithub className="  w-8 h-8" />   </button>
            <button onClick={()=>Swal.fire('This button is just for visual aesthetics.')}  className="btn-p text-white flex justify-center items-center" style={{borderRadius:'100%',width:'40px' }}> <IoLogoFacebook className="  w-8 h-8" />   </button>
        </div>
    );
};

export default SocialLogin;
