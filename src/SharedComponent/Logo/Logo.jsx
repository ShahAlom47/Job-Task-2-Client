import { Link } from "react-router-dom";

import z from '../../assets/logo/z-logo.png'

const Logo = () => {
    return (
        <div className=" w-full">
            <Link to={'/'} className=' w-full'>
                    <button className='flex lg:justify-center md:justify-center items-center overflow-y-hidden w-full'>
                        <img className=' lg:h-16 lg:w-18 md:h-16 md:w-18 w-10 h-10' src={z} alt="logo" />
                        <span className='text-xl md:text-3xl lg:text-3xl font-bold -m-3'>-Zone</span>

                    </button>
                </Link>
        </div>
    );
};

export default Logo;