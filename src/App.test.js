import React from "react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.querySelector()).toMatch("The International Invitations");
});
