import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from "./NavBar";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("test navbar has standings", () => {
  act(() => {
    render(<NavBar />, container);
  });
  expect(container.textContent).toBe("Standings");
});

it("test logo has standings", () => {
  act(() => {
    render(<NavBar />, container);
  });
  const bar = container.querySelector(".link");
  expect(bar.textContent).toBe("Standings");
});

it("test logo has img", () => {
  act(() => {
    render(<NavBar />, container);
  });
  const logo = container.querySelector("img");
  expect(logo.getAttribute("src")).toBeDefined();
});
