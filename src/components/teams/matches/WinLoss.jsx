import React from "react";
import PropTypes from "prop-types";
import { StatusFlag } from "../../StatusFlag";

export function WinLossFlag(props) {
  if (props.status === "TIE") {
    return (
      <StatusFlag>
        <div className="win_loss tie">Tie</div>
      </StatusFlag>
    );
  } else if (props.status === "WIN") {
    return (
      <StatusFlag>
        <div className="win_loss win">Win</div>
      </StatusFlag>
    );
  } else if (props.status === "LOSS") {
    return (
      <StatusFlag>
        <div className="win_loss loss">Loss</div>
      </StatusFlag>
    );
  }
}

WinLossFlag.proptype = {
  status: PropTypes.string,
};

export function calcWin(score, o_score) {
  if (score === o_score) {
    return "TIE";
  } else if (score > o_score) {
    return "WIN";
  } else {
    return "LOSS";
  }
}
