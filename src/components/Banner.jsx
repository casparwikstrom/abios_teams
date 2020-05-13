import React from "react";
import styled from "styled-components";
import BannerPicture from "./BannerPicture";
import PropTypes from "prop-types";

const Thing = styled.div`
    .banner:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(38,38,47,0.35);
    }
    .banner {
        background-color: #1f2026;
        color: #fff;
        text-align: center;
        position: relative;
        height: 370px;
        background-size: auto 100%!important;
        background-position: left center!important;
        background-repeat: no-repeat!important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
   }
}
`;
const sectionStyle = {
  backgroundImage:
    "url('https://img.abiosgaming.com/games/dota-2-splash-bg.png')",
};

function Banner(props) {
  return (
    <Thing>
      <div className="banner" style={sectionStyle}>
        <BannerPicture title={props.title} image_url={props.image_url} />
      </div>
    </Thing>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string,
};
export default Banner;
