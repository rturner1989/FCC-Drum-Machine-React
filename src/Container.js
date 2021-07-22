import React, { useState } from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import Toggleswitch from "./Components/Toggleswitch";

const Container = () => {
    const [display, setDisplay] = useState("");
    const [bank, setBank] = useState(true);
    // const [toggle, setToggle] = useState(true);
    const [toggle, setToggle] = useState({ checkedA: false });

    const handleClick = (e) => {
        setDisplay(e);
    };

    const handleToggle = (event) => {
        // setToggle(false);
        if (toggle.checkedA === false) {
            setToggle({ ...toggle, [event.target.name]: event.target.checked });
            setBank(false);
        } else if (toggle.checkedA === true) {
            setToggle({ ...toggle, [event.target.name]: event.target.checked });
            setBank(true);
        }
    };

    return (
        <div id="drum-machine">
            <Display display={display} />
            <Drumpad handleClick={handleClick} bank={bank} />
            <Toggleswitch toggle={toggle} handleToggle={handleToggle} />
        </div>
    );
};

export default Container;
