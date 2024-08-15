import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import CategoryMenu from "./DropDownMenu/DropDownMenu";
import SearchBar from "./SearchBar/SearchBar";

const AllProduct = () => {
    const [openCatBtn, setCatBtn] = useState(false);
    const [openBrandMenu, setBrandMenu] = useState(false);
    const [openSortMenu, setSortMenu] = useState(false);

    const [currentCategory, setCategory] = useState(null);
    const [currentBrand, setBrand] = useState(null);
    const [currentSortValue, setSortValue] = useState(null);

    console.log(currentCategory);

    return (
        <div className="relative max-w pt-10">
            <div className="flex justify-between gap-4 p-4 py-8">
                {/* Category button */}
                <button
                    onClick={() =>{
                         setCatBtn(!openCatBtn)
                         setBrandMenu(false)
                        }
                        }
                    className="bg-color-p w-3/12 flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                >

                    <FaList />
                    <span>All Category</span>
                    {openCatBtn ? (
                        <MdKeyboardArrowDown className="text-4xl text-black" />
                    ) : (
                        <MdKeyboardArrowUp className="text-4xl" />
                    )}
                </button>

                {/* search bar  */}

                <div className="flex-1">
                    <SearchBar ></SearchBar>
                </div>

                <div className="w-3/12 flex gap-3 justify-between">

                {/*  brand  button */}
                <button
                    onClick={() => {
                        setCatBtn(false)
                        setBrandMenu(!openBrandMenu)}}
                    className="bg-color-p w-full  flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                >
                    
                    <span>Brand</span>
                    {openBrandMenu ? (
                        <MdKeyboardArrowDown className="text-4xl text-black" />
                    ) : (
                        <MdKeyboardArrowUp className="text-4xl" />
                    )}
                </button>

                {/*  Short Button  */}

                <button
                    onClick={() => setSortMenu(!openBrandMenu)}
                    className="bg-color-p  w-full flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                >
                <span>Sort By</span>
                {openCatBtn ? (
                    <MdKeyboardArrowDown className="text-4xl text-black" />
                ) : (
                    <MdKeyboardArrowUp className="text-4xl" />
                )}
                </button>
                </div>

            </div>

            {/* Category Menu */}
            {openCatBtn && <CategoryMenu className={'w-3/12 '} params={'category'} setCategory={setCategory} openCatBtn={openCatBtn} setCatBtn={setCatBtn} ></CategoryMenu>}
            {openBrandMenu && <CategoryMenu className={'w-3/12'} params={'brand'} setCategory={setBrandMenu} openCatBtn={openBrandMenu} setCatBtn={setBrandMenu} ></CategoryMenu>}
        </div>
    );
};

export default AllProduct;
