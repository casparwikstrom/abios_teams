import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { getByTestId } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import RosterRow from "./RosterRow";
import Proptypes from "prop-types";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const test_props = {
  nick_name: "chuggen",
  default: "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png",
  first_name: "caspar",
  last_name: "wikström",
  country: "sweden",
  roles: [3],
  id: 1337,
};

it("row has some variables", () => {
  act(() => {
    render(<RosterRow {...test_props} />, container);
  });

  /* const opponent_name = getByTestId(container, "opponent-name");
  const opponent_logo = getByTestId(container, "opponent-logo");
  const date = getByTestId(container, "date");*/
});
