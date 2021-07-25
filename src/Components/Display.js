import React, { useState, useEffect, useRef } from "react";

const Display = ({ display }) => {
    const refDisplay = useRef(null);

    return (
        <div id="display" ref={refDisplay}>
            {display === "" ? "FCC Drum Machine" : `${display}`}
        </div>
    );
};

export default Display;
