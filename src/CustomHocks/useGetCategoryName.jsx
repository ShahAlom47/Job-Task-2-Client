import { useState, useEffect } from 'react';
import useAxiosPublic from "./useAxiosPublic";

const useGetCategoryName = () => {
    const AxiosPublic = useAxiosPublic();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await AxiosPublic.get('/product/allProduct/categoryName');
                setCategories(response.data);
            } catch (error) {
                setError("Failed to fetch category names. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [AxiosPublic]);

    return { categories, loading, error };
};

export default useGetCategoryName;
