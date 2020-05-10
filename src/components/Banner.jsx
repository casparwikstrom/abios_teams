import React from "react";
import styled from 'styled-components'

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
   }
}
`

function Banner() {

    const sectionStyle = {
        backgroundImage: "url('https://img.abiosgaming.com/games/dota-2-splash-bg.png')",
    };

    return (
        <Thing>
            <div className="banner" style={sectionStyle}>
                <h1>This is banner</h1>
            </div>
        </Thing>
    );
}

export default Banner;

