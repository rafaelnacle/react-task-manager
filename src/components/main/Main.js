import React from "react";
import Card from "../card/Card";
import "../main/Main.scss";

const Main = () => {
  return (
    <main className="main">
      <Card
        title="Teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Card
        title="Teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Card
        title="Teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing "
      />
      <Card
        title="Teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </main>
  );
};

export default Main;
