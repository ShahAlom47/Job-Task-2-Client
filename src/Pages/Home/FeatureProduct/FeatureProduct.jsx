import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../CustomHocks/useAxiosPublic';
import Loading from '../../../SharedComponent/Loading';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Logo from '../../../SharedComponent/Logo/Logo';
import { Link } from 'react-router-dom';

const FeatureProduct = () => {
    const AxiosSecure = useAxiosPublic();

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const { data, isLoading, error } = useQuery({
        queryKey: ['featureProduct'],
        queryFn: async () => {
            const res = await AxiosSecure.get(`/product/getFeatureProduct`);
            return res?.data;
        }
    });

    if (isLoading) return <Loading></Loading>;
    if (error) return <ErrorPage></ErrorPage>;

    return (
        <div className="grid grid-cols-1 grid-row-6 md:grid-rows-2 lg:grid-rows-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
            {/* h1 Title */}
            <div className="col-span-2 row-span-1 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold text-center flex w-full justify-center items-center"><Logo></Logo> Collections</h2>
                <h1 className="text-5xl font-bold text-center mb-6">Featured Products</h1>
                <Link to={'/allProducts'}>
                    <button
                        style={{ width: '150px', backgroundColor: 'transparent', color: '#0063d1', border: 'solid 3px  #0063d1' }}
                        className="btn-p font-semibold">All Products</button>
                </Link>
            </div>

            {data?.map((product, index) => (
                <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={index}
                    className={` border rounded-lg flex flex-col items-center justify-center  overflow-hidden relative
                      
                      ${index === 0 && 'col-span-1 col-start-1 row-span-1 row-start-2 '}
                      ${index === 1 && 'col-span-1 col-start-2 row-span-1 row-start-2 '}
                      ${index === 2 && 'col-span-1 col-start-3 row-span-1 row-start-1 '}
                      ${index === 3 && 'col-span-1 col-start-4 row-span-1 row-start-1 '}
                      ${index === 4 && 'col-span-1 col-start-3 row-span-1 row-start-2 '}
                      ${index === 5 && 'col-span-1 col-start-4 row-span-1 row-start-2 '}
                     `}>

                    <div className="h-full w-full overflow-hidden">
                        <img
                            src={product.productImage}
                            alt={product.productName}
                            className={`object-cover w-full h-full `}
                        />
                    </div>
                    <div className='my-5 mb-8'>
                        <h3 className="text-lg font-bold text-center mt-4">{product.productName}</h3>
                        <p className=" text-blue-600 text-lg text-center">{product.category}</p>
                        <p className=" font-semibold text-lg text-center">TK {product.price}</p>
                    </div>
                    <div
                        className={`absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center transition-all duration-700 ${hoveredIndex === index ? 'h-full' : 'h-0'}`} >
                        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <Link
                            to={`/productDetails/${product._id}`} // fixed id from data._id to product._id
                            className={`absolute active-btn bottom-4 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-sm transition-all duration-700 
                                ${hoveredIndex === index ? 'opacity-100 bottom-1/3' : '-bottom-12 opacity-0'}`} >
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureProduct;
