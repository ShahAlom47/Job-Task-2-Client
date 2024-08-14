// import { NavLink } from 'react-router-dom';
import { IoMdCall } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaTwitter } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import Logo from './Logo/Logo';

const Footer = () => {
  const date= new Date()
  const year= date.getFullYear()
  return (
    <footer className="bg-[#e8e6e6] text-white">
      <div className="footer p-10 pb-5 max-w text-gray-800 flex lg:flex-row md:flex-row flex-col justify-around items-center">
        <aside className=' flex justify-center items-center flex-col h-full w-1/4'>
        
            <Logo></Logo>
       

          <p className=' text-lg'>Your Ultimate Tech Destination</p>
        </aside>
   
        <nav>
          
                <div className=" ">
                   
                    <div className="  bg-color- text-stone-700 flex flex-col justify-around">
                      <h2 className="text-lg font-medium flex items-center gap-4"><IoMdCall /> <span>Emergency Line: (002) 012612457</span></h2>
                        <h2 className="text-lg font-medium flex items-center gap-4"><FaLocationDot /> <span>Location: Street 68, Mahattan,
                            New York</span></h2>
                        <h2 className="text-lg font-medium flex items-center gap-4"><MdOutlineAccessTime /> <span>Mon - Fri: 8:00 am - 7:00 pm</span></h2>
                    </div>
                </div>

                <div className="flex justify-evenly gap-3 my-5 ">
                    <a className=" btn-p flex justify-center items-center gap-2" target="blank" href="https://www.facebook.com/sai.ami.393"><FaFacebookF />  Facebook</a>
                    <a className=" btn-p flex justify-center items-center gap-2" target="blank" href="https://www.linkedin.com/in/shah-alom-626322290/"><FaLinkedinIn />  Linkedin</a>
                    <a className=" btn-p flex justify-center items-center gap-2" target="blank" href="https://www.facebook.com/sai.ami.393"><FaTwitter /> Twitter </a>

                </div>

          
        </nav>
      </div>
      <div className=' bg-slate-900 p-3 text-center'>
      <p>&copy; {year} [Red Love]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;