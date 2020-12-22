import React from "react";

const FeaturedItem = ({ image }) => {
  return (
    <div className="product">
      <a href="#">
        <img src={image} alt />
        <p className="price">2$</p>
      </a>
      <h2>
        <a href="#">Ut pharetra augue nec augue</a>
      </h2>
      <p>
        Mauris fermentum tortor non enim aliquet condimentum. Nam aliquam
        pretium feugiat.
      </p>
    </div>
  );
};

export default FeaturedItem;
