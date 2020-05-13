import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const WinLossStyle = styled.div`
  .win_loss {
    float: left;
    background: #49bb47;
    border-radius: 2px;
    padding: 7px 9px;
    margin: 8px 0 8px 10px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
    -webkit-backface-visibility: hidden;
    -webkit-transform: skew(-10deg);
    transform: skew(-10deg);
  }
  .tie {
    background: blue;
  }
  .loss {
    background: red;
  }
`;

export function WinLossFlag(props) {
  if (props.status === "TIE") {
    return (
      <WinLossStyle>
        <div className="win_loss tie">Tie</div>
      </WinLossStyle>
    );
  } else if (props.status === "WIN") {
    return (
      <WinLossStyle>
        <div className="win_loss win">Win</div>
      </WinLossStyle>
    );
  } else if (props.status === "LOSS") {
    return (
      <WinLossStyle>
        <div className="win_loss loss">Loss</div>
      </WinLossStyle>
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
