import React from 'react';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2;
  const starIcons = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < roundedRating) {
      if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
        starIcons.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        starIcons.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      }
    } else {
      starIcons.push(<i key={i} className="bi bi-star"></i>);
    }
  }

  return <div className="star-rating">{starIcons}</div>;
};

export default StarRating;