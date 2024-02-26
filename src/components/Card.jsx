import { Link } from "react-router-dom";

const Card = ({
  cloudinaryImageId,
  avgRating,
  costForTwo,
  cuisines,
  sla,
  name,
}) => {
  return (
    <Link
      to={`/menu/${cloudinaryImageId}/${avgRating}/${costForTwo}/${cuisines}/${name}`}
    >
      <div className="max-w-xs bg-white shadow-lg rounded-md overflow-hidden w-72">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
          className="w-full h-32 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">{cuisines.join(",")}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">&#9733;</span>
            <span className="text-gray-700">{avgRating}</span>
          </div>
          Delivery Time and Cost
          <p className="text-sm text-gray-700">
            {sla.deliveryTime} min &bull; {costForTwo} delivery
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
