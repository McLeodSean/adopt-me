import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "hello" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Greg",
  //     animal: "Bird",
  //     breed: "Cockatoo",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Tabby",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Greg" animal="Bird" breed="Cockatoo" />
      <Pet name="Finn" animal="Dog" breed="Border Collie" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
