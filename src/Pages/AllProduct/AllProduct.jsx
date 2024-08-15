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
        <div className="relative max-w pt-10">
            {/* heading */}
            <div className=" relative flex justify-between gap-4 p-4 py-8">
                {/* Category button */}
                <button
                    onClick={() => {
                        setCatBtn(!openCatBtn);
                        setBrandMenu(false);
                    }}
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

                {/* search bar */}
                <div className="flex-1">
                    <SearchBar setSearchTerm={setSearchTerm} />
                </div>

                <div className="w-4/12 flex gap-3 justify-between">
                    {/* Brand button */}
                    <button
                        onClick={() => {
                            setCatBtn(false);
                            setSortMenu(false)
                            setBrandMenu(!openBrandMenu);
                        }}
                        className="bg-color-p w-full flex gap-2 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                    >
                        <span>{currentBrand ? currentBrand : 'Brand'}</span>
                        {openBrandMenu ? (
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                        ) : (
                            <MdKeyboardArrowUp className="text-4xl" />
                        )}
                    </button>

                    {/* Sort Button */}
                    <button
                        onClick={() => {
                            setBrandMenu(false)
                            setSortMenu(!openSortMenu)}}
                        className="bg-color-p w-full flex gap-1 items-center text-white text-xl font-medium p-4 py-1 rounded-sm cursor-pointer"
                    >
                        <span>{currentSortValue ? currentSortValue : 'Sort By'}</span>
                        {openSortMenu ? (
                            <MdKeyboardArrowDown className="text-4xl text-black" />
                        ) : (
                            <MdKeyboardArrowUp className="text-4xl" />
                        )}
                    </button>
                </div>
                {/* Category Menu */}
                {openCatBtn && <CategoryMenu className={'absolute bottom-1 w-3/12 shadow-xl '} params={'category'} setCategory={setCategory} openCatBtn={openCatBtn} setCatBtn={setCatBtn} ></CategoryMenu>}
                {openBrandMenu && <CategoryMenu className={' absolute bottom-1 shadow-xl  -3/12'} params={'brand'} setCategory={setBrand} openCatBtn={openBrandMenu} setCatBtn={setBrandMenu} ></CategoryMenu>}
                {openSortMenu && <SortMenu className={'w-3/12 shadow-xl'} setSortValue={setSortValue} openSortMenu={openSortMenu} setSortMenu={setSortMenu} ></SortMenu>}



            </div>


            {/* Main Content */}
            <div id="content" className="flex gap-3 mb-5 p-5">
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
                        {data?.products && (
                            <div className=" grid grid-cols-3 gap-4 my-5">
                                {/* Render products */}
                                {data?.products?.map(product => (
                                    <div className=" overflow-hidden border" key={product.id}>

                                        <ProductCard  data={product} ></ProductCard>
                                    </div>
                                       
                                ))}
                            </div>
                        )}
                    </div>

                     {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className=" btn-p"
                    style={{borderRadius:'50px 0px 0px 50px'}}
                >
                    Prev
                </button>
                <span className="px-4 py-2">{page} / {totalPages}</span>
                <button
                    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className=" btn-p"
                    style={{borderRadius:'0px 50px 50px 0px'}}
                >
                    Next
                </button>
            </div>
                </div>

                <aside className="w-3/12">
                    <div className="border p-2">
                        <PriceFilter
                            setMinPriceRange={setMinPriceRange}
                            setMaxPriceRange={setMaxPriceRange}
                        />
                    </div>
                </aside>
            </div>

           

        </div>
    );
};

export default AllProduct;
