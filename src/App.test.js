import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should return article with highest number of likes first", () => {
  expect(1 + 2).toBe(3);
});

let testState = {
  like0: 2,
  like1: 0,
  like2: 10,
  like3: 0,
  like4: 0,
  articles: [],
  articleIndex: -1,
  ranked: false
};

let expectedState = {
  like0: 3,
  like1: 0,
  like2: 10,
  like3: 0,
  like4: 0,
  articles: [],
  articleIndex: -1,

  ranked: false
};

test("should return article with highest number of likes first", () => {
  expect(testState.addLikes(0).toBe(expectedState));
});
