import React, { useState } from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";

const Container = () => {
    const [display, setDisplay] = useState("");

    const handleClick = (e) => {
        setDisplay(e);
    };

    return (
        <div id="drum-machine">
            <Display display={display} />
            <Drumpad handleClick={handleClick} />
        </div>
    );
};

export default Container;
