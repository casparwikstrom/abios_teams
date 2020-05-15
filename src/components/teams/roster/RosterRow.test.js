import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RosterRow from "./RosterRow";
import { getByTestId } from "@testing-library/dom";

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
    default:
      "https://img.abiosgaming.com/competitors/noone-dota2-ukr-vladimir-minenko.png",
  },
};

it("Row has the correct variables", () => {
  act(() => {
    render(<RosterRow {...test_props} />, container);
  });

  const avatar = getByTestId(container, "avatar");
  const flag = getByTestId(container, "flag");
  const country_name = getByTestId(container, "country_name");

  expect(country_name.textContent).toBe("sweden");
  expect(avatar.getAttribute("src")).toBe(
    "https://img.abiosgaming.com/competitors/noone-dota2-ukr-vladimir-minenko.png"
  );
  expect(flag.getAttribute("src")).toBe("test_country_image");
});
