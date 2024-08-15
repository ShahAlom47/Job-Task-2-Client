import ReactSlider from 'react-slider';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const PriceFilter = ({setMinPriceRange,setMaxPriceRange}) => {
    const [range, setRange] = useState([20, 10000]); 
  
    const handleSliderChange = (value) => {
        setRange(value);
    };
    const handelFilter =()=>{
        
        setMaxPriceRange(range[1])
        setMinPriceRange(range[0])
    }

    return (
        <div className="p-4">
            <h2 className=' py- pl-2 border-l-4 border-color-p text-lg font-semibold'>Filter by Price</h2>
            <ReactSlider
                className="horizontal-slider w-full h-1 my-5 rounded-full"  // Added background for the line
                thumbClassName="thumb bg-color-p rounded-full w-4 h-4 pb-1"  // Style the thumbs
                trackClassName="track bg-color-p h-1 mt-[6px]"  // Style the selected range
                min={0}
                max={10000}
                value={range}
                onChange={handleSliderChange}
                renderThumb={(props) => <div {...props}></div>}
            />
            <div className="mt-4">
                <span> <span className='font-semibold text-gray-600'>Price:</span> {range[0]} TK</span> - <span> {range[1]} TK</span>
            </div>
            <button onClick={handelFilter} className=' btn-p mt-5 ' style={{width:'100%'}}>Filter</button>
        </div>
    );
};

export default PriceFilter;
