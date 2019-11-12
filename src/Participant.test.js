import React from "react";
import ReactDOM from "react-dom";
import Participant from "./Participant";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Participant />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <Participant
        name="Calvin Rosehart"
        onStage="true"
        inSession="true"
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
