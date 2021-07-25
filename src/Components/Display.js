import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";

const Display = () => {
    const { display } = useGlobalContext();
    const refDisplay = useRef(null);

    return (
        <div id="display" ref={refDisplay}>
            {display === "" ? "FCC Drum Machine" : `${display}`}
        </div>
    );
};

export default Display;
