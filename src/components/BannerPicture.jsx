import React, {useEffect} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {MyLoader} from "./MyLoader";
import styled from "styled-components";
import "../assets/dota.jpg"

const PictureStyling = styled.div`
    .banner_picture img {
        height: 200px !important;
    }
    .name_and_picture{
        z-index: 2 !important; 
    }
    `


export default function BannerPicture(props) {
    const info = props.team_info;

    return (
        <PictureStyling>
            <div className="name_and_picture">
                <div className="banner_picture"><img src="../assets/dota.jpg" alt=""/></div>
                <div className="h2">
                    {info && info.info.name}
                </div>
            </div>

        </PictureStyling>
    );
}

