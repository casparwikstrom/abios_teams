import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, {useState} from "react";


export default function RosterRow(props) {
    const player = props.player;
    /*const [roles, setRoles] = useState([]);*/

    return (
        <TableRow key={player.id}>
            <TableCell component="th" scope="row">
                {player.nick_name}
            </TableCell>
            <TableCell>
                <img src={player.images.default} alt=""/>
            </TableCell>
            <TableCell>
                {player.first_name} {player.last_name}
            </TableCell>
            <TableCell>
                {player.roles.map((role) => {
                    return <div key={role.name}>{role.name} </div>;
                })}
            </TableCell>
        </TableRow>
    );
}

/*
active: true
country: {images: {…}, name: "China", short_name: "CN", region: {…}}
deleted_at: null
first_name: "Zhang"
id: 10761
images: {fallback: true, default: "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png", thumbnail: "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png"}
last_name: "Ruida"
nick_name: "Faith_Bian"
race: null
roles: (2) [{…}, {…}]
social_media_accounts: []
__proto__: Object*/

/*display: flex;
justify-content: space-around;
/!* align-content: center; *!/
/!* text-align: center; *!/
/!* display: block; *!/
/!* margin-left: auto; *!/
/!* margin-right: auto; *!/
text-align: center;
/!* padding-bottom: 31%; *!/
/!* margin-top: 1%; *!/
padding-top: 20%;
padding-bottom: 20%;*/
