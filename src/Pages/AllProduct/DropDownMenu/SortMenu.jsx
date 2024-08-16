

// eslint-disable-next-line react/prop-types
const SortMenu = ({setSortValue,openSortMenu,setSortMenu}) => {
    return (
        <div>
            <div className={`   absolute top-full right-[1%]  -mt-5  bg-white shadow-lg rounded-sm z-50 transition-all duration-300 ease-in-out overflow-y-scroll ${openSortMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4">
                    <ul className=''>


                        <li
                            key={1}
                            onClick={() => {
                                setSortMenu(false)
                                setSortValue('High to Low')
                            }}
                            className="py-1 border-b-2 px-4 lg:font-semibold md:font-semibold hover:bg-gray-100 cursor-pointer"
                        >
                           Price High to Low
                        </li>
                        <li
                            key={2}
                            onClick={() => {
                                setSortMenu(false)
                                setSortValue('Low to High')
                            }}
                            className="py-1 border-b-2 px-4 lg:font-semibold md:font-semibold hover:bg-gray-100 cursor-pointer"
                        >
                           Price Low to High
                        </li>
                        <li
                            key={2}
                            onClick={() => {
                                setSortMenu(false)
                                setSortValue('Latest')
                            }}
                            className="py-1 border-b-2 px-4 lg:font-semibold md:font-semibold hover:bg-gray-100 cursor-pointer"
                        >
                          Latest Product
                        </li>


                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SortMenu;