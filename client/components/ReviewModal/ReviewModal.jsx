import React, { useEffect, useState } from "react";
import { useAppContext } from "client/components/AppContext.jsx";
import "./reviewModal.css";

const ReviewModal = ({ ReviewModalActive }) => {
  const { reviews, recommendationPercentage } = useAppContext();
  const handleClose = () => {
    toggleModal();
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="review-modal-container">
        <p className="review-modal-title">Reviews</p>
        <div className="review-modal-percentage">
          <strong>{recommendationPercentage}</strong>% Customers Recommended
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
