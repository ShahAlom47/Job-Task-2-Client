import { useState } from 'react';
import img from '../../../assets/image/about_us_img_11.png';

const WhoWeAre = () => {
    const [showFullText, setShowFullText] = useState(false);

    const handleToggleText = () => {
        setShowFullText(!showFullText);
    };

    const fullText = `
        We are a dedicated e-commerce platform that connects customers with high-quality products across a wide range of categories, including Boats, Office Supplies, Technology, and Home essentials. Our mission is to simplify your shopping experience by offering a one-stop solution for all your needs.
        
        With a commitment to exceptional service and a seamless online shopping experience, we provide our users with access to an extensive selection of products that cater to both professional and personal use. Whether you're looking to upgrade your workspace, enhance your tech setup, find the perfect home item, or explore new adventures on the water, we’ve got you covered.

        Why Choose Us: At our core, we believe in delivering quality, convenience, and satisfaction. Our platform is designed to make your online shopping experience easy, efficient, and enjoyable. From fast delivery to reliable customer support, we're here to ensure you find exactly what you need.

        Our Vision: To be the leading online marketplace where customers can discover and purchase the best products with confidence, knowing that we prioritize quality, affordability, and customer service.

        Join us on this journey as we continue to grow and offer even more products that meet the diverse needs of our customers. Shop with us and experience the difference of a marketplace built around your convenience and satisfaction.
    `;

    const previewText = fullText.substring(0, 350);

    return (
        <div className='max-w'>
            <div id="section1" className="grid gap-5 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-start py-6">
                <div className='lg:px-10 md:px-8 px-4 '>
                   <div className="border-l-8 border-color-p pl-2">
                   <h3 className='text-lg font-semibold mb-3 text-color-p'>Your Trusted Marketplace</h3>
                   <h1 className='text-4xl font-bold mb-3 text-black'>Who We Are</h1>
                   </div>
                    <div className="text-gray-600 font-medium">
                        <p>
                            {showFullText ? fullText : `${previewText}`}
                        </p>
                        {!showFullText && (
                            <span>
                                <br />
                                <strong>Why Choose Us:</strong> We prioritize quality, convenience, and customer satisfaction. Shop with confidence knowing that your needs are at the heart of everything we do.
                            </span>
                        )}
                        {showFullText && (
                            <div>
                                <strong>Why Choose Us:</strong> We prioritize quality, convenience, and customer satisfaction. Shop with confidence knowing that your needs are at the heart of everything we do.<br /><br />
                                <strong>Our Vision:</strong> To be the leading online marketplace where customers can discover and purchase the best products with confidence, knowing that we prioritize quality, affordability, and customer service.<br /><br />
                                Join us on this journey as we continue to grow and offer even more products that meet the diverse needs of our customers. Shop with us and experience the difference of a marketplace built around your convenience and satisfaction.
                            </div>
                        )}
                    </div>
                    <button 
                        onClick={handleToggleText} 
                        className="btn-p mt-3"
                    >
                        {showFullText ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div>
                    <img className='w-full' src={img} alt="Who We Are" />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
