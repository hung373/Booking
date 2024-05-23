import { Link } from "react-router-dom";
import "./searchhotelcard.css";
import { useEffect } from "react";

const SearchHotelCard = ({ item }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const card = document.getElementsByClassName("searchItem");
  //     if (card && card.length > 0) {
  //       card[0].classList.remove("loading");
  //     }
  //   }, 30000);

  //   // Xóa timer khi component unmounts hoặc thực hiện clean-up
  //   return () => clearTimeout(timer);
  // }, []); // useEffect sẽ chạy chỉ một lần sau khi component mount
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="searchItem loading">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <Link to={`http://localhost:3001/hotels/${item._id}`}>
          <h1 className="siTitle">{item.name}</h1>
        </Link>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.description}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">
            {formatNumberWithCommas(item.price)} VNĐ
          </span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`http://localhost:3001/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHotelCard;
