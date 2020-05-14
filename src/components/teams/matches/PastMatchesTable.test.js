import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import React from "react";
import PastMatchesTable from "./PastMatchesTable";
import { getByTestId } from "@testing-library/dom";
import TestRenderer from "react-test-renderer";
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

const past_matches = [
  {
    team_name: "Virtus.pro",
    opponent_score: -1,
    team_id: 33618,
    opponent_name: "Vici Gaming",
    date: "2022-03-24 16:42:00",
    opponent_logo:
      "https://img.abiosgaming.com/competitors/thumbnails/Vici-gaming-2017.png",
    id: 189335,
    opponent_id: 42642,
    team_score: -1,
    upcoming: false,
  },
];

it("has correct headers", () => {
  act(() => {
    render(<PastMatchesTable past_matches={[]} />, container);
  });

  const win_loss = getByTestId(container, "win_loss");
  const opponent = getByTestId(container, "opponent");
  const date = getByTestId(container, "date");
  const score = getByTestId(container, "score");
  expect(win_loss.textContent).toBe("WIN/LOSS");
  expect(opponent.textContent).toBe("OPPONENT");
  expect(date.textContent).toBe("DATE");
  expect(score.textContent).toBe("SCORE");
});

it("test one row", () => {
  const testRenderer = TestRenderer.create(
    <PastMatchesTable past_matches={past_matches} />
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(MatchesRow).props.id).toBe(189335);
});
