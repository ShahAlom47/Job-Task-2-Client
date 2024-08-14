import PageHeading from "../../Components/PageHeading";
import bg from '../../assets/image/AboutUs-bg.jpg'
import ContactSection from "../Home/ContactSection/ContactSection";
import DonationProcess from "./DonationProcess/DonationProcess";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const AboutUs = () => {

    return (
        <div>
            <PageHeading title={'About Us'} img={bg} ></PageHeading>

            <div className=" p-4">
                <WhoWeAre></WhoWeAre>
                <DonationProcess></DonationProcess>
                <ContactSection></ContactSection>
            </div>

        </div>
    );
};

export default AboutUs;