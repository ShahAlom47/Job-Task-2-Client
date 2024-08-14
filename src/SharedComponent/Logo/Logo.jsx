import { Link } from "react-router-dom";

import z from '../../assets/logo/z-logo.png'

const Logo = () => {
    return (
        <div className=" w-full">
            <Link to={'/'} className=' w-full'>
                    <button className='flex justify-center items-center overflow-y-hidden w-full'>
                        <img className=' h-16 w-18' src={z} alt="logo" />
                        <span className='text-3xl font-bold -m-3'>Zone</span>

                    </button>
                </Link>
        </div>
    );
};

export default Logo;