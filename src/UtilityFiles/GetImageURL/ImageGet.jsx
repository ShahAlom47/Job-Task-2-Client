import { useState, useEffect } from 'react';

function ImageGallery() {
  const [categoryImages, setCategoryImages] = useState({});
  const API_KEY = 'Jc4Z-Si0EkAMespz82JBPRzwA8nwsIp-mZF6WKIYQeQ';
  const categories = [
    "Boats",
    "Office Supplies",
    "Technology",
    "Clothing",
    "Furniture",
    "Home Appliances",
    "Sporting Goods",
    "Toys"
  ];

  useEffect(() => {
    const fetchCategoryImages = async (category) => {
      const URL = `https://api.unsplash.com/search/photos?query=${category}&client_id=${API_KEY}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.results.map(image => image.urls.regular);
      } catch (error) {
        console.error(`Error fetching images for ${category}:`, error);
        return [];
      }
    };

    const fetchAllCategories = async () => {
      const categoryImagePromises = categories.map(async (category) => {
        const urls = await fetchCategoryImages(category);
        return { [category]: urls };
      });

      try {
        const categoryImagesArray = await Promise.all(categoryImagePromises);
        const categorizedImages = categoryImagesArray.reduce((acc, obj) => {
          return { ...acc, ...obj };
        }, {});

        setCategoryImages(categorizedImages);

        // Log the final categorizedImages object
        console.log('Final Category Images Object:', categorizedImages);
      } catch (error) {
        console.error('Error fetching all categories:', error);
      }
    };

    fetchAllCategories();
  }, []);

  return (
    <div>
      {Object.keys(categoryImages).length > 0 ? (
        <div className="image-gallery grid grid-cols-4 gap-4">
          {Object.entries(categoryImages).map(([category, urls]) => (
            <div key={category}>
              <h3>{category}</h3>
              {urls.map((url, index) => (
                <img key={index} src={url} alt={category} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}

export default ImageGallery;
