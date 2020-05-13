import React from "react";
import { WinLossStyle } from "../teams/WinLoss";
import Proptypes from "prop-types";

export function InvitationFlag(props) {
  if (!(typeof props.status != "undefined" && props.status != null)) {
    return (
      <WinLossStyle>
        <div className="win_loss tie">Unknown Status</div>
      </WinLossStyle>
    );
  } else if (props.status === "SECURED_INVITE") {
    return (
      <WinLossStyle>
        <div className="win_loss win">Invited</div>
      </WinLossStyle>
    );
  } else if (props.status === "QUALIFIED") {
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

InvitationFlag.proptype = {
  status: Proptypes.string,
};
