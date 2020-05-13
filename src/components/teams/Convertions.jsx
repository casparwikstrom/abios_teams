import React from "react";
import styled from "styled-components";

const WinLossStyle = styled.div`
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
  if (props === "TIE") {
    return (
      <WinLossStyle>
        <div className="win_loss tie">Tie</div>
      </WinLossStyle>
    );
  } else if (props === "WIN") {
    return (
      <WinLossStyle>
        <div className="win_loss win">Win</div>
      </WinLossStyle>
    );
  } else if (props === "LOSS") {
    return (
      <WinLossStyle>
        <div className="win_loss loss">Loss</div>
      </WinLossStyle>
    );
  }
}

export function ConvertRole(role) {
  if (!(typeof role != "undefined" && role != null)) {
    return "Unknown role";
  } else if (role === "1") {
    return "Carry";
  } else if (role === "2") {
    return "Mid";
  } else if (role === "3") {
    return "Offlane";
  } else if (role === "4") {
    return "Support";
  } else {
    return "Hard Support";
  }
}

export function ConvertStatus(status) {
  if (!(typeof status != "undefined" && status != null)) {
    return (
      <WinLossStyle>
        <div className="win_loss tie">Unknown Status</div>
      </WinLossStyle>
    );
  } else if (status === "SECURED_INVITE") {
    return (
      <WinLossStyle>
        <div className="win_loss win">Invited</div>
      </WinLossStyle>
    );
  } else if (status === "QUALIFIED") {
    return (
      <WinLossStyle>
        <div className="win_loss tie">Currently Qualified</div>
      </WinLossStyle>
    );
  } else {
    return (
      <WinLossStyle>
        <div className="win_loss loss">Not Qualified</div>
      </WinLossStyle>
    );
  }
}

export function CalcWin(score, o_score) {
  if (score === o_score) {
    return "TIE";
  } else if (score > o_score) {
    return "WIN";
  } else {
    return "LOSS";
  }
}
