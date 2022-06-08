import React from "react";
import Card from "../card/Card";
import "../main/Main.scss";

const Main = () => {
  return (
    <main className="main container mt-6">
      <div>
        <h1>Welcome to the realm of tasks</h1>
      </div>

      <div className="main-div">
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
      </div>
    </main>
  );
};

export default Main;
