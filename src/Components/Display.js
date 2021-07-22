import React from "react";

const Display = ({ display }) => {
    return (
        <div id="display">{display === "" ? "Hello World" : `${display}`}</div>
    );
};

export default Display;
