import React, { useState } from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import Toggleswitch from "./Components/Toggleswitch";

const Container = () => {
    const [display, setDisplay] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        setDisplay(e);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div id="drum-machine">
            <Display display={display} />
            <Drumpad handleClick={handleClick} toggle={toggle} />
            <Toggleswitch toggle={toggle} handleToggle={handleToggle} />
        </div>
    );
};

export default Container;
