import React from "react";

function Banner() {

    const sectionStyle = {
        backgroundImage: "url('https://img.abiosgaming.com/games/dota-2-splash-bg.png')",
        height:"400px",
        width: "100%",
    };

    return (
        <div className="banner" style={sectionStyle}>
            <h1>This is banner</h1>
        </div>
    );
}

export default Banner;

