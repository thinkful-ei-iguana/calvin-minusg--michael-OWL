import React from "react";
import Stage from "./Stage";
import ReactDOM from "react-dom";
import STORE from "./STORE";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stage participants={STORE} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer.create(<Stage participants={STORE} />).toJSON();
  expect(tree).toMatchSnapshot();
});
