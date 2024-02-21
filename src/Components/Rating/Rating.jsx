
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const numericRating = parseFloat(rating);
  const maxRating = 5;
  const filledStars = Math.min(Math.max(numericRating, 0), maxRating);
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      i <= filledStars ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaStar key={i} className="text-gray-400" />
      )
    );
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;