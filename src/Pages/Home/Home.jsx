


import { Helmet } from "react-helmet";
import Banner2 from "./Banner/Banner2";
import FeatureProduct from "./FeatureProduct/FeatureProduct";

const Home = () => {
    return (
        <div className=" ">
             <Helmet>
                <title>Home- Z-Zone</title>
            </Helmet>
            <Banner2></Banner2>
            <FeatureProduct></FeatureProduct>
          
           
        </div>
    );
};

export default Home;