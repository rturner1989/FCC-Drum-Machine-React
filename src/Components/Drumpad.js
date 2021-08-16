import React from "react";
import { data } from "../Data";
import Button from "./Button";
import "../index.css";

const Drumpad = () => {
    return (
        <section id="btn-container">
            {data.map((link) => {
                return <Button key={link.keyTrigger} link={link} />;
            })}
        </section>
    );
};

export default Drumpad;
