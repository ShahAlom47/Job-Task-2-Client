import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import Loading from "../../../SharedComponent/Loading";
import ErrorPage from "../../ErrorPage/ErrorPage";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const ProductDetails = () => {
    const { id } = useParams();
    const AxiosPublic = useAxiosPublic();
    const [quantity,setQuantity]=useState(1)

    const { data, isLoading, error } = useQuery({
        queryKey: ['productDetails'],
        queryFn: async () => {
            const res = await AxiosPublic.get(`/product/productDetails/${id}`);
            return res.data;
        }
    })
    console.log(data);

    const decrementProductQuantity=()=>{
        if(quantity===0)return;
      setQuantity(quantity-1)
        
    }
    const incrementProductQuantity=()=>{
        if(quantity===data.availableProduct)return;
        setQuantity(quantity+1)
    }

    if (isLoading) return <Loading></Loading>
    if (error) return <ErrorPage></ErrorPage>
    return (
        <div className=" max-w lg:p-4 md:p-4 p-1 lg:py-7 md:py-5 py-2">
             <Helmet>
                <title> Details- Product- Z-Zone</title>
            </Helmet>
            <h1 className="text-4xl border-l-4 my-6 pl-3 font-bold border-color-p">Details</h1>
            <div className=" lg:flex md:flex lg:p-5 md:p-5 p-2 bg-gray-300 bg-opacity-20">
                <div className=" lg:w-1/2 md:w-1/2 lg:max-h-screen  md:max-h-screen  shadow-xl p-3 overflow-hidden">
                    <img className="w-full h-full " src={data?.productImage} alt="" />
                </div>
                <div className="lg:p-4 md:p-4 p-2 py-5   flex flex-col justify-center">

                   <div className=" mb-5">
                   <h1 className=" font-bold text-xl ">{data.productName}</h1>
                   <p className="">Category: <span className="text-color-p ">{data.category}</span></p>
                   </div>
                    <StarRatings
                        rating={data?.ratings}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="5px"
                    />
                    <p className="my-5 text-gray-500">{data.description }</p>
                    <p className="mb-5"> <strong> Price:</strong> <span className="text-color-p font-semibold">{data.price} </span> TK</p>
                   <div className=" my-3">
                   <p className="">{data.availableProduct} In Stock</p>
                   <div className="flex flex-wrap items-center my-3 gap-6">
                    <div className=" flex items-center h-10 border-color-p border ">
                        <button onClick={decrementProductQuantity} className=" btn  btn-sm h-full text-lg font-bold rounded-sm">--</button>
                        <p className="text- font-semibold h-full min-w-10 border-x-2 border-color-p flex justify-center items-center bg-gray-100">{quantity}</p>
                        <button onClick={incrementProductQuantity} className=" btn h-full  btn-sm  text-lg font-bold rounded-sm">+</button>

                    </div>
                    <button onClick={()=>Swal.fire('This feature is currently under development.')} className=" btn-p">Add To Cart</button>
                   </div>

                   </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;