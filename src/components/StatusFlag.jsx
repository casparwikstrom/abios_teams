import styled from "styled-components";

export const StatusFlag = styled.div`
  .win_loss {
    float: left;
    background: #49bb47;
    border-radius: 2px;
    padding: 7px 9px;
    margin: 8px 0 8px 10px;
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
  .win {
    background: green;
  }
  .tie {
    background: blue;
  }
  .loss {
    background: red;
  }
`;
