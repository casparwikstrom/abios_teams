import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { getByTestId } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import MatchesRow from "./MatchesRow";

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
  opponent_logo: "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png",
  opponent_name: "Test name",
  date: "2019-01-22 02:00:00",
};

it("row has some variables", () => {
  act(() => {
    render(<MatchesRow {...test_props} />, container);
  });

  const opponent_name = getByTestId(container, "opponent-name");
  const logo = getByTestId(container, "opponent-logo");
  const date = getByTestId(container, "date");

  /*expect(id.textContent).toBe(1);
expect(rank.textContent).toBe(2);
expect(name.textContent).toBe("Test name");
expect(status.textContent).toBe("Test Status");
expect(dcp.textContent).toBe(1337);*/

  expect(logo.getAttribute("src")).toBeDefined();
});
