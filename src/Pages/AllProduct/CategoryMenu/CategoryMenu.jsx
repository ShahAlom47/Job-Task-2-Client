
import useGetCategoryName from '../../../CustomHocks/useGetCategoryName';


// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryMenu = ({setCategory,openCatBtn,setCatBtn}) => {
    
    const { categories } = useGetCategoryName();

    return (
        <div>
            <div className={`absolute top-full left-3 -mt-5 w-3/12 bg-white shadow-lg rounded-sm z-50 transition-all duration-300 ease-in-out overflow-hidden ${openCatBtn ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4">
                    <ul>
                        {categories.length > 0 ? (
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
                        )}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CategoryMenu;