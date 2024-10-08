import PropTypes from 'prop-types';
const PageHeading = ({ img, subTitle, title, titleColor }) => {
    return (
        <div>
            <div className="relative lg:h-[200px] md:h-[150px] h-24 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className=' relative z-10  flex items-center justify-center flex-col space-y-6 pb-5  h-full  text-white'>
                    <h2 className="text-color-p text-center font-semibold">{subTitle}</h2>
                    <h1 className={`${titleColor} lg:text-4xl text-center text-3xl font-bold`}>{title}</h1>

                </div>
            </div>


        </div>
    );
};

export default PageHeading;
PageHeading.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    img: PropTypes.string,
};