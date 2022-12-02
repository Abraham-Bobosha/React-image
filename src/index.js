import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200/300?grayscale";

ReactDom.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>

    <img alt="bacon" src={img} />
    <img
      className="food-img"
      alt="bacon"
      src="https://picsum.photos/150/300?grayscale"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://picsum.photos/100/300?grayscale"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://picsum.photos/50/300?grayscale"
    />
  </div>,
  document.getElementById("root")
);
