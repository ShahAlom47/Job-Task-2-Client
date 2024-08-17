import { Helmet } from "react-helmet";
import PageHeading from "../../Components/PageHeading";
import bg from '../../assets/image/AboutUs-bg.jpg'
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const AboutUs = () => {

    return (
        <div>
             <Helmet>
                <title>About Us - Z-Zone</title>
            </Helmet>
            <PageHeading title={'About Us'} img={bg} ></PageHeading>

            <div className=" p-4">
                <WhoWeAre></WhoWeAre>
            </div>

        </div>
    );
};

export default AboutUs;