import React from "react";
import {Link} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "../assets/Home.css";

function toDate(epoch) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    console.log("date is", d.toDateString())
    return d.toLocaleTimeString();
}

function Row(props) {

   /* const sectionStyle = {
        backgroundImage: "url(" + props.match.dota_logo + ")"
    };*/

    return (
        <div key={props.match.id} className="col-12 card card-body">
            <Link to={"/match/" + props.match.id}>

            </Link>
        </div>
    );
}

export default Row;