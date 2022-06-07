import React from "react";
import "../cardItem/CardItem.scss";

const CardItem = ({ task }) => {
  return (
    <>
      <section className="task">
        <button>
          <p>{task}</p>
        </button>
      </section>
    </>
  );
};

export default CardItem;
