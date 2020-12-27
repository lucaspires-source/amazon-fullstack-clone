import React from "react";

const Rating = (props) => {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
    </div>
  );
};

export default Rating;
