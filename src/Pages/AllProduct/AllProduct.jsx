import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useState } from "react"
import SearchBar from "./SearchBar/SearchBar";
import SortMenu from "./DropDownMenu/SortMenu";
import PriceFilter from "./PriceFilter/PriceFilter";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";
import CategoryMenu from "./DropDownMenu/DropDownMenu";
import Loading from "../../SharedComponent/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductCard from "./ProductCard/ProductCard";
import DataNotAvailable from "../../SharedComponent/DataNotAvailable";

const AllProduct = () => {
    const AxiosPublic = useAxiosPublic();
    const [openCatBtn, setCatBtn] = useState(false);
    const [openBrandMenu, setBrandMenu] = useState(false);
    const [openSortMenu, setSortMenu] = useState(false);
    const [cardLayOut, setCardLayOut] = useState(false);

    const [currentCategory, setCategory] = useState(null);
    const [currentBrand, setBrand] = useState(null);
    const [currentSortValue, setSortValue] = useState(null);
    const [maxPriceRange, setMaxPriceRange] = useState(null);
    const [minPriceRange, setMinPriceRange] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const perPageDataCard = 9;



    const { isPending, error, data } = useQuery({
        queryKey: [
            "allProduct",
            currentCategory,
            currentBrand,
            currentSortValue,
            minPriceRange,
            maxPriceRange,
            searchTerm,
            page
        ],
        queryFn: async () => {
            const params = {
                category: currentCategory,
                brand: currentBrand,
                sort: currentSortValue,
                minPrice: minPriceRange,
                maxPrice: maxPriceRange,
                search: searchTerm,
                page,
                perPage: perPageDataCard,
            };

            const res = await AxiosPublic.get("/product/getallProducts", { params });
            return res.data;
        }
    });



    const totalPages = data?.totalPages || 1;

    return (
        <div className="bg-gray-500 bg-opacity-10">
            <div className="relative max-w lg:pt-10 md:pt-8 p-2 ">
                {/* heading */}
                <div className=" relative grid grid-cols-7 lg:grid-rows-1 md:grid-rows-1 grid-rows-3  lg:gap-5 md:gap-5  gap-2 p-4 lg:py-8 md:py-8 py-2">
                    {/* Category button */}
                    <button onClick={() => {
                        setCatBtn(!openCatBtn);
                        setBrandMenu(false); }}
                        className="bg-color-p lg:h-12 md:h-12 h-6  lg:col-span-2 md:col-span-2 col-span-7  row-start-2 lg:row-start-1 md:row-start-1 flex gap-2 justify-center items-center text-white lg:text-xl md:text-xl text-sm font-medium lg:p-4 md:p-4 p-1   rounded-sm cursor-pointer"
                    >
                        <FaList />
                        <span>{currentCategory ? currentCategory : 'All Category'}</span>
                        {openCatBtn ?
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                            : <MdKeyboardArrowUp className="text-4xl" />
                        }
                    </button>

                    {/* search bar */}
                    <div className="flex-1 lg:col-span-3 md:col-span-3 col-span-7 row-start-1">
                        <SearchBar setSearchTerm={setSearchTerm} />
                    </div>

                    {/* Brand button */}
                    <button onClick={() => {
                        setCatBtn(false);
                        setSortMenu(false)
                        setBrandMenu(!openBrandMenu);}}
                        className="bg-color-p lg:h-12 md:h-12 h-6  lg:col-span-1 md:col-span-1 col-span-3 lg:row-start-1 md:row-start-1 col-start-1 row-start-3 w-full flex gap-2 items-center text-white lg:text-xl md:text-xl text-sm font-medium p-2 rounded-sm cursor-pointer"
                    >
                        <span>{currentBrand ? currentBrand : 'Brand'}</span>
                        {openBrandMenu ?
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                            : <MdKeyboardArrowUp className="text-4xl" />
                        }
                    </button>

                    {/* Sort Button */}
                    <button onClick={() => {
                        setBrandMenu(false)
                        setSortMenu(!openSortMenu)}}
                        className="bg-color-p lg:h-12 md:h-12 h-6  lg:col-span-1 md:col-span-1 col-span-4 col-start-4 lg:row-start-1 md:row-start-1  row-start-3 flex gap-1 items-center text-white lg:text-xl md:text-xl text-sm font-medium p-2 rounded-sm cursor-pointer"
                    >
                        <span>{currentSortValue ? currentSortValue : 'Sort By'}</span>
                        {openSortMenu ?
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                            : <MdKeyboardArrowUp className="text-4xl" />
                        }
                    </button>

                    {/* Category Menu */}
                    {openCatBtn && <CategoryMenu className={'absolute bottom-1 w-3/12 shadow-xl '} params={'category'} setCategory={setCategory} openCatBtn={openCatBtn} setCatBtn={setCatBtn} ></CategoryMenu>}
                    {openBrandMenu && <CategoryMenu className={' absolute bottom-1 shadow-xl  -3/12'} params={'brand'} setCategory={setBrand} openCatBtn={openBrandMenu} setCatBtn={setBrandMenu} ></CategoryMenu>}
                    {openSortMenu && <SortMenu className={'w-3/12 shadow-xl'} setSortValue={setSortValue} openSortMenu={openSortMenu} setSortMenu={setSortMenu} ></SortMenu>}

                </div>


                {/* Main Content */}
                <div id="content" className="flex lg:flex-row md:flex-row flex-col-reverse gap-3 mb-5 lg:p-5 md:p-5 p-1">
                    <div className="flex-1">
                        <div className="bg-gray-200 border flex justify-between p-5">
                            <h1 className="text-xl font-semibold">
                                {currentBrand ? currentCategory : "All"}
                            </h1>
                            <div className="flex items-center text-xl gap-1 font-medium">
                                <span>View</span>
                                <button
                                    onClick={() => setCardLayOut(false)}
                                    className={`text-2xl ${!cardLayOut ? 'text-color-p' : ''}`}
                                >
                                    <CgMenuGridR />
                                </button>
                                <button
                                    onClick={() => setCardLayOut(true)}
                                    className={`text-3xl ${cardLayOut ? 'text-color-p' : ''}`}
                                >
                                    <BsList />
                                </button>
                            </div>
                        </div>


                        <div className="flex-1">
                            {/* Card container */}
                            {isPending && <Loading></Loading>}
                            {error && <ErrorPage></ErrorPage>}
                            {data?.products.length > 0 ? (
                                <div className={` grid ${cardLayOut ? 'lg:grid-cols-2 md:grid-cols-1 grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1'} gap-4 my-5`}>
                                    {/* Render products */}
                                    {data?.products?.map(product => (
                                        <div className=" overflow-hidden border shadow-xl" key={product.id}>
                                            <ProductCard cardLayOut={cardLayOut} data={product} ></ProductCard>
                                        </div>

                                    ))}
                                </div>
                            ) : <DataNotAvailable></DataNotAvailable>

                            }
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                                className=" btn-p"
                                style={{ borderRadius: '50px 0px 0px 50px' }}
                            >
                                Prev
                            </button>
                            <span className="px-4 py-2">{page} / {totalPages}</span>
                            <button
                                onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={page === totalPages}
                                className=" btn-p"
                                style={{ borderRadius: '0px 50px 50px 0px' }}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <aside className="lg:w-3/12 md:w-3/12 w-full">
                        <div className="border p-2">
                            <PriceFilter
                                setMinPriceRange={setMinPriceRange}
                                setMaxPriceRange={setMaxPriceRange}
                            />
                        </div>
                    </aside>
                </div>



            </div>
        </div>
    );
};

export default AllProduct;
