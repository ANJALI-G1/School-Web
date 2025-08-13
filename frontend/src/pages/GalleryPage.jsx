import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import axios from '../utils/api.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const categories = [
  { label: "All", value: "All" },
  { label: "Sports Day", value: "sports day" },
  { label: "Annual Function", value: "annual function" },
  { label: "Events", value: "event" },
  { label: "Class Activities", value: "class activity" },
  { label: "Celebrations", value: "celebration" },
];

const ITEMS_PER_PAGE = 20;

const GalleryPage = () => {
  const [allImages, setAllImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchImages = useCallback(async (pageNum = 1) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/gallery?page=${pageNum}&limit=${ITEMS_PER_PAGE}`);
      const newImages = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      if (pageNum === 1) {
        setAllImages(newImages);
      } else {
        setAllImages(prev => [...prev, ...newImages]);
      }
      
      setFilteredImages(prev => pageNum === 1 ? newImages : [...prev, ...newImages]);
      setHasMore(response.data.pagination.pages > pageNum);
    } catch (err) {
      console.error("Error fetching gallery images:", err);
      setError("Failed to load images. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);
  const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};


  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleFilter = useCallback((category) => {
    setActiveCategory(category);
    setPage(1);
    if (category === "All") {
      setFilteredImages(allImages);
    } else {
      setFilteredImages(allImages.filter((img) => img.category === category));
    }
  }, [allImages]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(nextPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">

      {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-20">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-center"
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">School Gallery</h1>
                  <p className="text-xl max-w-3xl mx-auto font-roboto">Explore moments from our vibrant school life and activities</p>
                </motion.div>
              </div>
            </section>


      {/* Header */}
      {/* <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-playfair">School Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-roboto">
          Explore moments from our vibrant school life and activities
        </p>
      </motion.div> */}

      {/* Error State */}

      <main className="p-4 md:p-8">
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-3 mb-8 flex-wrap"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.value}
            onClick={() => handleFilter(cat.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-sm text-sm md:text-base font-medium transition-all ${
              activeCategory === cat.value 
                ? "bg-blue-900 text-white shadow-md" 
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Loading State */}
      {isLoading && page === 1 && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-600 mb-2">No images found</h3>
          <p className="text-gray-500">We couldn't find any images for this category</p>
        </motion.div>
      )}

      {/* Images Grid */}
      {!isLoading && filteredImages.length > 0 && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-7"
          >
            {filteredImages.map((img) => (
              <motion.div 
                key={img._id}
                whileHover={{ scale: 1.02 }}
                className="relative group rounded-sm overflow-hidden shadow-sm bg-white"
                layout
              >
                <LazyLoadImage
                  src={img.image.url}
                  alt={img.category}
                  effect="blur"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:brightness-90"
                  width="100%"
                  height="256px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="font-medium capitalize">{img.category}</p>
                    {img.date && (
                      <p className="text-sm opacity-90">
                        {new Date(img.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {hasMore && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <button 
                onClick={loadMore}
                className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 font-medium transition rounded"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Load More Photos'}
              </button>
            </motion.div>
          )}
        </>
      )}

      {/* Loading more indicator */}
      {isLoading && page > 1 && (
        <div className="flex justify-center mt-6">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      )}
      </main>
    </div>
  );
};

export default GalleryPage;