
import useGetBrandName from '../../../CustomHocks/useGetBrandName';
import useGetCategoryName from '../../../CustomHocks/useGetCategoryName';


// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryMenu = ({setCategory,openCatBtn,setCatBtn,params}) => {
    
    const { categories } = useGetCategoryName();
    const {brands}=useGetBrandName()
 

    return (
        <div>
            <div className={`z-50   absolute top-full ${params==='brand'?'right-[12%]':'left-3'} -mt-5  bg-white shadow-lg rounded-sm z-50 transition-all duration-300 ease-in-out overflow-y-scroll ${openCatBtn ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4">
                    <ul className=''>
                         <li
                         key={params}
                         onClick={() =>{ 
                             setCatBtn(false)
                             setCategory(null)}}
                         className="py-2 border-b-2 px-4 font-semibold hover:bg-gray-100 cursor-pointer"
                     >
                        All
                     </li>
                     {  params==='brand'?
                        
                        brands.length > 0 ? (
                            brands.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() =>{ 
                                        setCatBtn(false)
                                        setCategory(category)}}
                                    className="py-2 border-b-2 px-4 font-semibold hover:bg-gray-100 cursor-pointer"
                                >
                                    {category}
                                </li>
                            ))
                        ) : (
                            <li className="py-2 px-4">No Brands available</li>
                        )
                        :
                        
                        categories.length > 0 ? (
                            categories.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() =>{ 
                                        setCatBtn(false)
                                        setCategory(category)}}
                                    className="py-2 border-b-2 px-4 font-semibold hover:bg-gray-100 cursor-pointer"
                                >
                                    {category}
                                </li>
                            ))
                        ) : (
                            <li className="py-2 px-4">No categories available</li>
                        )
                    }
                    </ul>
                </div>
            </div>

            

        </div>
    );
};

export default CategoryMenu;