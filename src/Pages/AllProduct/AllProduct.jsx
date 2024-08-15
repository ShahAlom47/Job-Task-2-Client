import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import CategoryMenu from "./DropDownMenu/DropDownMenu";
import SearchBar from "./SearchBar/SearchBar";
import SortMenu from "./DropDownMenu/SortMenu";
import PriceFilter from "./PriceFilter/PriceFilter";

const AllProduct = () => {
    const [openCatBtn, setCatBtn] = useState(false);
    const [openBrandMenu, setBrandMenu] = useState(false);
    const [openSortMenu, setSortMenu] = useState(false);
    const [cardLayOut,setCardLayOut]=useState(false)

    const [currentCategory, setCategory] = useState(null);
    const [currentBrand, setBrand] = useState(null);
    const [currentSortValue, setSortValue] = useState(null);
    const [maxPriceRange,setMaxPriceRange]=useState(null)
    const [minPriceRange,setMinPriceRange]=useState(null)


    return (
        <div className="relative max-w pt-10">
            {/* heading */}
            <div className="flex justify-between gap-4 p-4 py-8">
                {/* Category button */}
                <button
                    onClick={() => {
                        setCatBtn(!openCatBtn)
                        setBrandMenu(false)
                    }
                    }
                    className="bg-color-p w-3/1 flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                >

                    <FaList />
                    <span>{currentCategory ? currentCategory : 'All Category'}</span>
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

                <div className="w-4/12 flex gap-3 justify-between">

                    {/*  brand  button */}
                    <button
                        onClick={() => {
                            setCatBtn(false)
                            setBrandMenu(!openBrandMenu)
                        }}
                        className="bg-color-p w-full  flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                    >

                        <span>{currentBrand ? currentBrand : 'Brand'}</span>
                        {openBrandMenu ? (
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                        ) : (
                            <MdKeyboardArrowUp className="text-4xl" />
                        )}
                    </button>

                    {/*  Short Button  */}

                    <button
                        onClick={() => setSortMenu(!openSortMenu)}
                        className="bg-color-p  w-full flex gap-1  items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                    >
                        <span>{currentSortValue ? currentSortValue : 'Sort By'}</span>
                        {openSortMenu ? (
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                        ) : (
                            <MdKeyboardArrowUp className="text-4xl" />
                        )}
                    </button>
                </div>

            </div>

          
                
                <div id="content" className=" flex gap-3 mb-5 p-5">
                    <div  className=" flex-1 ">
                        <div className="bg-gray-200  border  flex justify-between p-5">
                            <h1 className="text-xl font-semibold">{currentBrand?currentCategory:"All"}</h1>
                            <div className=" flex items-center text-xl gap-1 font-medium">
                                <span>View</span>
                                <button onClick={()=>setCardLayOut(false)} className={`text-2xl ${cardLayOut?'':'text-color-p'} `}><CgMenuGridR  /></button>
                                <button onClick={()=>setCardLayOut(true)} className={`text-2xl ${cardLayOut?'text-color-p':''} `} ><BsList /></button>
                            </div>

                        </div>
                        <div className=" flex-1 border">

                        </div>

                    </div>
                   <aside className=" w-3/12" >

                   <div className="border p-2">
                    <PriceFilter setMinPriceRange={setMinPriceRange} setMaxPriceRange={setMaxPriceRange}></PriceFilter>
                   </div>

                   </aside>

                </div>


          






            {/* Category Menu */}
            {openCatBtn && <CategoryMenu className={'w-3/12 '} params={'category'} setCategory={setCategory} openCatBtn={openCatBtn} setCatBtn={setCatBtn} ></CategoryMenu>}
            {openBrandMenu && <CategoryMenu className={'w-3/12'} params={'brand'} setCategory={setBrand} openCatBtn={openBrandMenu} setCatBtn={setBrandMenu} ></CategoryMenu>}
            {openSortMenu && <SortMenu className={'w-3/12'} setSortValue={setSortValue} openSortMenu={openSortMenu} setSortMenu={setSortMenu} ></SortMenu>}
        </div>
    );
};

export default AllProduct;
