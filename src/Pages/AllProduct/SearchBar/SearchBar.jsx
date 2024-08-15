import{ useState } from 'react';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.trim() === "") {
            setSearchTerm(null); 
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setSearchTerm(inputValue.trim());
        }
    }

    return (
        <div>
            <form onSubmit={handleForm} className="rounded-sm flex">
                <input
                    className="p-[14px] outline-none w-full border-2 border-r-0 rounded-l-sm"
                    type="text"
                    name="value"
                    placeholder="Find Your Product"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    className="bg-color-p h-full p-4 rounded-r-sm active:active-btn"
                    type="submit"
                >
                    {icon}
                </button>
            </form>
        </div>
    );
};

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-6 w-6 opacity-100 text-white"
    >
        <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
        />
    </svg>
);

export default SearchBar;
