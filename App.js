import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading" className="heading">
    React using jsx 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {heading}
    <h1>Heading Component from React functional components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
