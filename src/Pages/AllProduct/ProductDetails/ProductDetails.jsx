import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const {id}=useParams()
console.log(id);
    return (
        <div>
            details
        </div>
    );
};

export default ProductDetails;