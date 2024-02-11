import React, { useEffect, useState } from "react";
import { useAppContext } from "client/components/AppContext.jsx";
import "./reviewModal.css";
import CustomerReviewsChart from "client/components/Accordion/CustomerReviewsContent/CustomerReviewsChart.jsx";

const ReviewModal = ({ ReviewModalActive, hoverPosition, hideReviewModal }) => {
  const { reviews, recommendationPercentage } = useAppContext();
  const handleCloseReview = () => {
    hideReviewModal();
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="review-modal"
        style={{ top: hoverPosition.top, left: hoverPosition.left }}
      >
        <div className="revew-modal-overlay">
          <div className="review-modal-content">
            <p className="review-modal-title">Reviews</p>
            <div className="review-modal-percentage">
              <strong>{recommendationPercentage}</strong>% Customers Recommended
            </div>
            <hr></hr>
            <div className="review-modal-chart-container">
              <div className="review-modal-chart-title">
                <p>Overall Ratings</p>
              </div>
              <div className="review-chart-box">
                <CustomerReviewsChart />
              </div>
            </div>
            <div className="close-review-modal">
              <button
                className="close-review-button"
                onClick={handleCloseReview}
              >
                X
              </button>
            </div>
            <div className="review-modal-see-all-container">
              <button className="see-all-reviews-btn">See All Reviews</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
