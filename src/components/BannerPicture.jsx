import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PictureStyling = styled.div`
  .name_and_picture {
    z-index: 2 !important;
  }
  img {
    height: 150px !important;
  }
  h2 {
    letter-spacing: 1.5px;
    font-weight: 600 !important;
    font-family: Raleway !important;
  }
`;

export default function BannerPicture(props) {
  return (
    <div>
      <PictureStyling>
        <div className="name_and_picture">
          <div className="banner_picture">
            <img src={props.image_url} alt="" />
          </div>
          <div className="h2">
            <h2>{props.title}</h2>
          </div>
        </div>
      </PictureStyling>
    </div>
  );
}

BannerPicture.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string,
};
