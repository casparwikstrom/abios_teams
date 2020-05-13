import React from "react";
import Proptypes from "prop-types";
import { StatusFlag } from "../StatusFlag";

export function InvitationFlag(props) {
  if (!(typeof props.status != "undefined" && props.status != null)) {
    return (
      <StatusFlag>
        <div className="win_loss tie">Unknown Status</div>
      </StatusFlag>
    );
  } else if (props.status === "SECURED_INVITE") {
    return (
      <StatusFlag>
        <div className="win_loss win">Invited</div>
      </StatusFlag>
    );
  } else if (props.status === "QUALIFIED") {
    return (
      <StatusFlag>
        <div className="win_loss tie">Currently Qualified</div>
      </StatusFlag>
    );
  } else {
    return (
      <StatusFlag>
        <div className="win_loss loss">Not Qualified</div>
      </StatusFlag>
    );
  }
}

InvitationFlag.proptype = {
  status: Proptypes.string,
};
