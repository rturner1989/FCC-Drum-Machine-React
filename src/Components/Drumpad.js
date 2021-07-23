import React from "react";
import { data } from "../Data";
import Button from "./Button";
import "../index.css";

const Drumpad = ({ handleClick, toggle }) => {
    return (
        <div id="btn-container">
            {data.map((link) => {
                return (
                    <Button
                        key={link.keyTrigger}
                        link={link}
                        handleClick={handleClick}
                        toggle={toggle}
                    />
                );
            })}
        </div>
    );
};

export default Drumpad;
