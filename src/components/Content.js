import React from "react";
import ImageOne from "../images/two.jpg";
import ImageTwo from "../images/three.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="pizza"
          className="mb-10 h-full rounded shadow"
        />
        <h1 className="mb-2 text-2xl font-bold">Egg Muffins Pizza</h1>
        <p>Crispy delicious</p>
        <span>$14</span>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="pizza"
          className="mb-10 h-full rounded shadow"
        />
        <h1 className="mb-2 text-2xl font-bold">Tomato Muffins Pizza</h1>
        <p>Crispy delicious</p>
        <span>$14</span>
      </div>
    </>
  );
};

export default Content;
