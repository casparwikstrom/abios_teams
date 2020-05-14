import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { getByTestId } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import ResultsRow from "./ResultsRow";

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
  id: 1,
  rank: 2,
  logo: "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png",
  name: "Test name",
  status: "QUALIFIED",
  dcp: 1337,
};

it("row has some variables", () => {
  act(() => {
    render(<ResultsRow {...test_props} />, container);
  });

  const rank = getByTestId(container, "rank-cell");
  const logo = getByTestId(container, "logo");
  const name = getByTestId(container, "name");
  const status = getByTestId(container, "status");
  const dcp = getByTestId(container, "dcp");

  expect(rank.textContent).toBe("2");
  expect(name.textContent).toBe("Test name");
  expect(status.textContent).toBe("Currently Qualified");
  expect(dcp.textContent).toBe("1337");
  expect(dcp.textContent).toBe("1337");

  expect(logo.getAttribute("src")).toBeDefined();
});
