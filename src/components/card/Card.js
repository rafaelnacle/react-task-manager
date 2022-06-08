import React from "react";
import "../card/Card.scss";
import CardItem from "../cardItem/CardItem";

const Card = ({ title }) => {
  function handleClick() {
    alert("You clicked me");
  }

  return (
    <>
      <section className="card">
        <header className="card-header">
          <h4>{title}</h4>
        </header>
        <article className="card-content">
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
        </article>
        <footer className="card-footer">
          <button onClick={handleClick}>Button</button>
        </footer>
      </section>
    </>
  );
};

export default Card;
