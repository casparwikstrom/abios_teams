import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RosterRow from "./RosterRow";

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
  country: {
    name: "sweden",
    images: {
      default: "test_country_image",
    },
  },
  roles: [3],
  id: 1337,
  images: {
    default: "test_image",
  },
};

it("row has some variables", () => {
  act(() => {
    render(<RosterRow {...test_props} />, container);
  });

  /* const opponent_name = getByTestId(container, "opponent-name");
  const opponent_logo = getByTestId(container, "opponent-logo");
  const date = getByTestId(container, "date");*/
});
