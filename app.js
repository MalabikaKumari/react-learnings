// const heading = React.createElement("h1", {}, "Hi from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//creating nested element

/* <div id="root">
  <div id="parent">
    <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h1 tag</h2>
    </div>
  </div>
</div>; */

//1

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//2
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h2", {}, "I am h2 tag"),
//     ])
//   );
//   console.log(parent);

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);

//#3
/* <div id="root">
  <div id="parent">
    <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h1 tag</h2>
    </div>
     <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h1 tag</h2>
    </div>
  </div>
</div>; */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
