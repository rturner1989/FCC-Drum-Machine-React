import React from "react";
import { data } from "../Data";
import Button from "./Button";
import "../index.css";

const Drumpad = ({ handleClick }) => {
    return (
        <div id="btn-container">
            {data.map((link) => {
                return (
                    <Button
                        key={link.id}
                        link={link}
                        handleClick={handleClick}
                    />
                );
            })}
        </div>
    );
};

export default Drumpad;
