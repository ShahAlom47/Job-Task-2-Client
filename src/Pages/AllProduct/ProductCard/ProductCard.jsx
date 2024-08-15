/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const [hovered, setHovered] = useState(false);


    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative text-center flex flex-col justify-center items-center py-8 px-6 border transition-transform duration-500 overflow-hidden"
        >
            {/* Product Image */}
            <div className="w-44 h-48 mb-5 relative bg-gray-100 overflow-hidden">
                <img
                    className={`w-full h-full transition-transform duration-500 ${hovered ? 'transform scale-110' : 'transform scale-100'
                        }`}
                    src={data?.productImage}
                    alt="product photo"
                />
            </div>


            <h1 className="text-lg font-semibold">{data?.productName}</h1>
            <h1 className="text-lg">
                <strong>Price:</strong> {data?.price} TK
            </h1>


            <div
                className={`absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center transition-all duration-700 ${hovered ? 'h-full' : 'h-0'
                    }`}
            >
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <Link
                    className={`absolute active-btn bottom-4 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-sm   transition-all duration-700 ${hovered ? 'opacity-100 bottom-28' : '-bottom-12 opacity-0'
                        }`}
                    to={`/productDetails/${data._id}`}>
                    <button  >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
