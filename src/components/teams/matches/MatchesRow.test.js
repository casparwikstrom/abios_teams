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
  opponent_name: "Test opponent_name",
  date: "2019-01-22 02:00:00",
  score: "0 - 2",
};

it("row has some variables", () => {
  act(() => {
    render(<MatchesRow {...test_props} />, container);
  });

  const opponent_name = getByTestId(container, "opponent-name");
  const opponent_logo = getByTestId(container, "opponent-logo");
  const date = getByTestId(container, "date");

  expect(opponent_logo.getAttribute("src")).toBeDefined();
  expect(opponent_logo.getAttribute("src")).toBe(
    "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png"
  );
  expect(opponent_name.textContent).toBe("Test opponent_name");
  expect(date.textContent).toBe("2019-01-22");
});
