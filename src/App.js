const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "hello" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Greg",
      animal: "Bird",
      breed: "Cockatoo",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
