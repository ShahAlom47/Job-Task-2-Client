import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bg from '../../../assets/banner/banner-bg.jpg';
import sideImg1 from '../../../assets/image/speaker_1.png';
import sideImg2 from '../../../assets/image/watch_2.png';
import sideImg3 from '../../../assets/image/watch_3.png';

const slides = [
    {
        title: "Experience Cutting-Edge Technology",
        subtitle: "Innovative Electronics for Modern Living",
        buttonLink: "/allProducts",
        buttonText: "Shop Now",
        sideImage: sideImg1,
    },
    {
        title: "Discover Advanced Gadgets",
        subtitle: "Top-Notch Devices for Every Need",
        buttonLink: "/allProducts",
        buttonText: "Explore Gadgets",
        sideImage: sideImg2,
    },
    {
        title: "Unleash the Power of Innovation",
        subtitle: "State-of-the-Art Electronics at Your Fingertips",
        buttonLink: "/allProducts",
        buttonText: "See More",
        sideImage: sideImg3,
    }
];


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className='relative bg-gradient-to-br from-black to-gray-900 mb-10 lg:h-[600px] md:h-[500px] h-[400px] rounded-sm overflow-hidden'>
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className="max-w lg:p-8 md:p-8  p-3">
                        <div className="flex items-center h-full w-full pt-8">
                            <motion.div
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100vw' }}
                                transition={{ duration: 1 }}
                                className="w-1/3 flex justify-start items-start pb-10"
                            >
                                <img src={slides[currentSlide].sideImage} alt="Side Image" className="lg:h-[300px] md:h-[250px] h-[150px] w-auto object-contain" />
                            </motion.div>

                           
                                <motion.div
                                    initial={{ x: '100vh' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100vh' }}
                                    transition={{ duration: 1 }}
                                    className="text-center"
                                >
                                    <p className="uppercase font-mont text-color-p lg:text-xl md:text-xl text-lg  mb-4">{slides[currentSlide].subtitle}</p>
                                    <h1 className='lg:text-5xl uppercase md:text-4xl text-2xl font-mont font-bold text-black mb-2 lg:w-10/12 md:10/12 mx-auto'>{slides[currentSlide].title}</h1>
                                </motion.div>
                             
                           
                        </div>
                        <motion.div
                                   initial={{ y: '100vh' }}
                                   animate={{ y: 0 }}
                                   exit={{ x: '100vh' }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="flex justify-center lg:w-8/12 md:w-8/12  lg:-mt-12 md:-mt-12 w-full  space-x-4 lg:ml-auto md:ml-auto ml-1"
                                >
                                    <Link to={slides[currentSlide].buttonLink}>
                                        <button
                                        style={{ width:'150px',backgroundColor:'transparent',color:'#0063d1', border:'solid 3px  #0063d1'}}
                                        className="btn-p font-semibold">View Collections</button>
                                    </Link>
                                    
                                </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

         
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                    className=" text-color-p text-2xl rounded-full px-2 shadow-lg"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
                <button
                    className=" text-color-p text-2xl rounded-full px-2 shadow-lg"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Banner;
