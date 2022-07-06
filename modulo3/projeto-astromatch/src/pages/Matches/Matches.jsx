import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../constants/constants";

export default function Matches(props) {
    return (
        <div>
            {props.matches.map(match => {
                return(
                    <p key={match.id}>{match.name}</p>
                )
            })}
        </div>
    );
}