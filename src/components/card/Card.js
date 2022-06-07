import React from "react";
import "../card/Card.scss";
import CardItem from "../cardItem/CardItem";

const Card = ({ title }) => {
  return (
    <>
      <section className="card">
        <header className="card-header">
          <h3>{title}</h3>
        </header>
        <article className="card-content">
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
          <CardItem task="lorem ipsum dolor" />
        </article>
        <footer className="card-footer">
          <button>Button</button>
        </footer>
      </section>
    </>
  );
};

export default Card;
