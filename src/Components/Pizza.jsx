import React from "react";

const Pizza = ({ data }) => {
  const { name, ingredients, price, photoName, soldOut } = data;
  return (
    <div className="pizza-card">
      <span className={`badge ${soldOut ? "stockOut" : "available"}`}>
        {soldOut ? "Stock Out" : "Available"}
      </span>
      <img src={photoName} alt="Pizza" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <small>${price}</small>
    </div>
  );
};

export default Pizza;
