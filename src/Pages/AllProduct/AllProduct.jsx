import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu/CategoryMenu";

const AllProduct = () => {
    const [openCatBtn, setCatBtn] = useState(false);
 
    const [currentCategory, setCategory] = useState(null);

    console.log(currentCategory);

    return (
        <div className="relative max-w pt-10">
            <div className="flex p-4 py-8">
                <div
                    onClick={() => setCatBtn(!openCatBtn)}
                    className="bg-color-p w-3/12 flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                >
                    
                    <FaList />
                    <span>All Category</span>
                    {openCatBtn ? (
                        <MdKeyboardArrowDown className="text-4xl text-black" />
                    ) : (
                        <MdKeyboardArrowUp className="text-4xl" />
                    )}
                </div>
            </div>

            {/* Category Menu */}
         {openCatBtn&& <CategoryMenu setCategory={setCategory} openCatBtn={openCatBtn} setCatBtn={setCatBtn} ></CategoryMenu>}
        </div>
    );
};

export default AllProduct;
