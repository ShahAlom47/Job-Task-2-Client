import React, { useState, useEffect } from 'react';
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
        buttonLink: "/products",
        buttonText: "Shop Now",
        sideImage: sideImg1,
    },
    {
        title: "Discover Advanced Gadgets",
        subtitle: "Top-Notch Devices for Every Need",
        buttonLink: "/products",
        buttonText: "Explore Gadgets",
        sideImage: sideImg2,
    },
    {
        title: "Unleash the Power of Innovation",
        subtitle: "State-of-the-Art Electronics at Your Fingertips",
        buttonLink: "/products",
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
        <div className='relative bg-gradient-to-br from-black to-gray-900 mb-10 h-[600px] rounded-lg overflow-hidden'>
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
                    <div className="max-w p-8">
                        <div className="flex items-center h-full w-full p-8">
                            <motion.div
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100vw' }}
                                transition={{ duration: 1 }}
                                className="w-1/3 flex justify-start"
                            >
                                <img src={slides[currentSlide].sideImage} alt="Side Image" className="h-[300px] w-auto object-contain" />
                            </motion.div>

                            <div className="w-2/3 relative flex flex-col items-center justify-center h-full">
                                <motion.div
                                    initial={{ y: '100vh' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '100vh' }}
                                    transition={{ duration: 1 }}
                                    className="text-center"
                                >
                                    <p className="uppercase font-mont text-color-p text-xl mb-4">{slides[currentSlide].subtitle}</p>
                                    <h1 className='lg:text-5xl uppercase text-2xl font-mont font-bold text-black mb-2 w-10/12 mx-auto'>{slides[currentSlide].title}</h1>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                    className="flex space-x-4 mt-6"
                                >
                                    <Link to={slides[currentSlide].buttonLink}>
                                        <button
                                        style={{ width:'200px',backgroundColor:'transparent',color:'#0063d1', border:'solid 3px  #0063d1'}}
                                        className="btn-p font-semibold">View Collections</button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="btn-p">Categories</button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Navigation Buttons */}
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
