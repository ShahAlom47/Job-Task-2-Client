import { IoMdCall } from "react-icons/io";
import ContactForm from "../../Components/ContactForm";
import PageHeading from "../../Components/PageHeading";
import img from '../../assets/image/contact-bg.jpg'
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const ContactUs = () => {
    return (
        <div>
            <PageHeading title={'Contact Us'} img={img}></PageHeading>
            <div className="max-w lg:p-10 md:p-5 p-2">
                <div className="shadow-xl lg:p-10 md:p-5 p-2 flex lg:flex-row md:flex-row flex-col gap-6">
                    <div className="lg:w-1/2 md:w-1/2">
                        <h1 className="text-2xl font-bold mb-8">Get In Touch</h1>
                        <p className="mb-4 text-gray-500">Have any questions or concerns about our products or services? We’re here to assist you. Whether you need more details about our Boats, Office Supplies, Technology, or Home categories, feel free to reach out. Our team is dedicated to providing the best possible support. Contact us today, and we’ll be happy to help.</p>
                        <div>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                    <div className="flex-1 lg:p-6 md:p-5 p-2 bg-color-p text-white flex flex-col justify-around">
                        <h2 className="lg:text-lg md:text-lg text-base font-bold mb-4 ">Quality and Service You Can Trust!</h2>
                        <h1 className="lg:text-3xl md:text-3xl text-xl font-bold mb-5">Dedicated Customer Support</h1>
                        <p className="mb-4">We strive to provide excellent customer service for all your needs. Whether you`re purchasing a new boat, upgrading your office, or looking for the latest tech, we’re here to help. Get in touch with us for any questions or assistance. Our team is ready to ensure you have a great shopping experience.</p>
                        <h2 className="text-base lg:text-lg md:text-lg font-semibold flex items-center gap-4"><IoMdCall /> <span>Customer Support Line: (002) 012612457</span></h2>
                        <h2 className="text-base lg:text-lg md:text-lg font-semibold flex items-center gap-4"><FaLocationDot /> <span>Location: Street 68, Manhattan, New York</span></h2>
                        <h2 className="text-base lg:text-lg md:text-lg font-semibold flex items-center gap-4"><MdOutlineAccessTime /> <span>Mon - Fri: 8:00 am - 7:00 pm</span></h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-evenly gap-5 my-9">
                    <a className="btn-p flex justify-center items-center gap-2" target="blank" href="https://www.facebook.com/sai.ami.393"><FaFacebookF /> Facebook</a>
                    <a className="btn-p flex justify-center items-center gap-2" target="blank" href="https://www.linkedin.com/in/shah-alom-626322290/"><FaLinkedinIn /> Linkedin</a>
                    <a className="btn-p flex justify-center items-center gap-2" target="blank" href="https://www.facebook.com/sai.ami.393"><FaTwitter /> Twitter</a>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
