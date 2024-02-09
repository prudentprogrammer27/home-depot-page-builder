import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children, currentProduct }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [recommendationPercentage, setRecommendationPercentage] = useState(0);
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      if (!currentProduct || isNaN(currentProduct.id)) {
        return;
      }

      const response = await axios.get(`/api/reviews/${currentProduct.id}`);
      console.log("Reviews API Response:", response.data);

      setReviews(response.data);

      const average = response.data.reduce((sum, review) => sum + review.rating, 0) / response.data.length;
      setAverageRating(average.toFixed(1));

      setTotalReviews(response.data.length);

      const recommendationCount = response.data.filter((review) => review.isrecommended).length;
      const percentage = (recommendationCount / response.data.length) * 100;
      setRecommendationPercentage(percentage.toFixed(0));
    } catch (error) {
      console.error('Error fetching reviews', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [currentProduct]);

  // useEffect(() => {
  //   fetchReviews();
  // }, [currentProduct]);

  // Expose the values and functions through the context
  const contextValues = {
    averageRating,
    totalReviews,
    recommendationPercentage,
    reviews,
    fetchReviews, // You can use this function to manually trigger a review fetch
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
