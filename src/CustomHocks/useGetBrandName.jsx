import { useState, useEffect } from 'react';
import useAxiosPublic from "./useAxiosPublic";

const useGetBrandName = () => {
    const AxiosPublic = useAxiosPublic();
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await AxiosPublic.get('/product/allProduct/brandName');
                setBrands(response.data);
            } catch (error) {
                setError("Failed to fetch brand names. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [AxiosPublic]);

    return { brands, loading, error };
};

export default useGetBrandName;
